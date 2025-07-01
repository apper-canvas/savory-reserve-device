import { useState } from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const TimePicker = ({ 
  selectedTime, 
  onTimeSelect, 
  label = "Select Time",
  availableTimes = [],
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTimes = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  const times = availableTimes.length > 0 ? availableTimes : defaultTimes;

  const handleTimeSelect = (time) => {
    onTimeSelect?.(time);
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
          <span className={selectedTime ? 'text-gray-900' : 'text-gray-500'}>
            {selectedTime || 'Choose a time'}
          </span>
          <ApperIcon 
            name="Clock" 
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
            {times.map((time) => {
              const isSelected = selectedTime === time;
              
              return (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    w-full px-4 py-3 text-left rounded-lg transition-all duration-200
                    ${isSelected 
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                      : 'hover:bg-primary-50 text-gray-700'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{time}</span>
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

export default TimePicker;