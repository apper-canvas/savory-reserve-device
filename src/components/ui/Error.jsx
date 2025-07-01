import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Error = ({ message = "Something went wrong", onRetry, type = "general" }) => {
  const getErrorContent = () => {
    switch (type) {
      case 'menu':
        return {
          icon: 'UtensilsCrossed',
          title: 'Menu Unavailable',
          description: 'We\'re having trouble loading our delicious menu items.',
        };
      case 'reservations':
        return {
          icon: 'CalendarX',
          title: 'Booking System Down',
          description: 'Our reservation system is temporarily unavailable.',
        };
      case 'reviews':
        return {
          icon: 'MessageSquareX',
          title: 'Reviews Unavailable',
          description: 'We can\'t load customer reviews right now.',
        };
      default:
        return {
          icon: 'AlertTriangle',
          title: 'Oops! Something went wrong',
          description: message,
        };
    }
  };

  const errorContent = getErrorContent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-full p-6 mb-6">
        <ApperIcon
          name={errorContent.icon}
          size={48}
          className="text-accent-500"
        />
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-gray-800 mb-2 text-center">
        {errorContent.title}
      </h3>
      
      <p className="text-gray-600 text-center mb-8 max-w-md">
        {errorContent.description}
      </p>
      
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRetry}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <ApperIcon name="RefreshCw" size={18} />
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
};

export default Error;