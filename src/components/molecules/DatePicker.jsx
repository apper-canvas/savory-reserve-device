import { useState } from 'react';
import { format, addDays, isSameDay, isAfter, startOfDay } from 'date-fns';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const DatePicker = ({ 
  selectedDate, 
  onDateSelect, 
  label = "Select Date",
  minDate = new Date(),
  maxDaysFromNow = 30,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const today = startOfDay(new Date());
  const dates = Array.from({ length: maxDaysFromNow }, (_, i) => addDays(today, i));

  const handleDateSelect = (date) => {
    onDateSelect?.(date);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white border-2 border-secondary-200 rounded-lg hover:border-primary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          <span className={selectedDate ? 'text-gray-900' : 'text-gray-500'}>
            {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Choose a date'}
          </span>
          <ApperIcon 
            name="Calendar" 
            size={18} 
            className="text-gray-400"
          />
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-50 mt-2 w-full bg-white border border-secondary-200 rounded-xl shadow-floating max-h-64 overflow-y-auto"
        >
          <div className="p-2">
            {dates.map((date) => {
              const isSelected = selectedDate && isSameDay(date, selectedDate);
              const isToday = isSameDay(date, today);
              
              return (
                <motion.button
                  key={date.toISOString()}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleDateSelect(date)}
                  className={`
                    w-full px-4 py-3 text-left rounded-lg transition-all duration-200
                    ${isSelected 
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                      : 'hover:bg-primary-50 text-gray-700'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        {format(date, 'EEEE')}
                        {isToday && (
                          <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="text-sm opacity-75">
                        {format(date, 'MMMM d, yyyy')}
                      </div>
                    </div>
                    {isSelected && (
                      <ApperIcon name="Check" size={16} />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DatePicker;