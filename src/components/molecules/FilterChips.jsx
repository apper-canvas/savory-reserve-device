import { motion } from 'framer-motion';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';

const FilterChips = ({ 
  filters = [], 
  activeFilters = [], 
  onFilterToggle,
  className = '' 
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter.value);
        return (
          <motion.button
            key={filter.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterToggle?.(filter.value)}
            className={`
              inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-200 border-2
              ${isActive 
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border-transparent shadow-lg' 
                : 'bg-white text-gray-700 border-secondary-200 hover:border-primary-300 hover:bg-primary-50'
              }
            `}
          >
            {filter.icon && (
              <ApperIcon
                name={filter.icon}
                size={16}
                className="mr-2"
              />
            )}
            {filter.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default FilterChips;