import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const StarRating = ({ 
  rating = 0, 
  maxRating = 5, 
  size = 'md',
  interactive = false,
  onRatingChange,
  className = '' 
}) => {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  
  const iconSize = sizes[size];

  const handleStarClick = (value) => {
    if (interactive && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;
        const isHalfFilled = rating > index && rating < starValue;
        
        return (
          <motion.button
            key={index}
            whileHover={interactive ? { scale: 1.1 } : {}}
            whileTap={interactive ? { scale: 0.9 } : {}}
            onClick={() => handleStarClick(starValue)}
            disabled={!interactive}
            className={`
              ${interactive ? 'cursor-pointer' : 'cursor-default'}
              focus:outline-none
            `}
          >
            <div className="relative">
              <ApperIcon
                name="Star"
                size={iconSize}
                className={`
                  ${isFilled || isHalfFilled 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                  }
                  transition-colors duration-150
                `}
              />
              {isHalfFilled && (
                <div 
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${((rating - index) * 100)}%` }}
                >
                  <ApperIcon
                    name="Star"
                    size={iconSize}
                    className="text-yellow-400 fill-current"
                  />
                </div>
              )}
            </div>
          </motion.button>
        );
      })}
      
      <span className="ml-2 text-sm text-gray-600 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;