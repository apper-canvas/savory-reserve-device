import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ type = "general", onAction, actionText = "Get Started" }) => {
  const getEmptyContent = () => {
    switch (type) {
      case 'menu':
        return {
          icon: 'ChefHat',
          title: 'No Menu Items Found',
          description: 'It looks like we haven\'t added any delicious dishes yet, or your filters didn\'t match any items.',
          actionText: 'View All Items',
        };
      case 'reservations':
        return {
          icon: 'Calendar',
          title: 'No Reservations Yet',
          description: 'You haven\'t made any reservations. Book a table and enjoy our exquisite dining experience!',
          actionText: 'Make Reservation',
        };
      case 'reviews':
        return {
          icon: 'MessageSquare',
          title: 'No Reviews Yet',
          description: 'Be the first to share your dining experience with other food lovers!',
          actionText: 'Write Review',
        };
      case 'search':
        return {
          icon: 'Search',
          title: 'No Results Found',
          description: 'We couldn\'t find any menu items matching your search. Try different keywords or browse our categories.',
          actionText: 'Clear Search',
        };
      default:
        return {
          icon: 'Coffee',
          title: 'Nothing Here Yet',
          description: 'This section is waiting to be filled with amazing content.',
          actionText: actionText,
        };
    }
  };

  const emptyContent = getEmptyContent();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full p-8 mb-6">
        <ApperIcon
          name={emptyContent.icon}
          size={64}
          className="text-primary-500"
        />
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-gray-800 mb-3 text-center">
        {emptyContent.title}
      </h3>
      
      <p className="text-gray-600 text-center mb-8 max-w-md leading-relaxed">
        {emptyContent.description}
      </p>
      
      {onAction && (
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAction}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <ApperIcon name="Plus" size={18} />
          {emptyContent.actionText}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Empty;