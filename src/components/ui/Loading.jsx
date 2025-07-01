import { motion } from 'framer-motion';

const Loading = ({ type = "cards" }) => {
  if (type === "menu") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface rounded-xl p-6 shadow-card"
          >
            <div className="shimmer h-48 w-full rounded-lg mb-4"></div>
            <div className="shimmer h-6 w-3/4 rounded mb-2"></div>
            <div className="shimmer h-4 w-full rounded mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="shimmer h-6 w-20 rounded"></div>
              <div className="shimmer h-8 w-24 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "reviews") {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface rounded-xl p-6 shadow-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="shimmer h-12 w-12 rounded-full"></div>
              <div>
                <div className="shimmer h-4 w-24 rounded mb-2"></div>
                <div className="shimmer h-3 w-16 rounded"></div>
              </div>
            </div>
            <div className="shimmer h-4 w-32 rounded mb-3"></div>
            <div className="shimmer h-16 w-full rounded"></div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-surface rounded-xl p-6 shadow-card"
        >
          <div className="shimmer h-32 w-full rounded-lg mb-4"></div>
          <div className="shimmer h-6 w-3/4 rounded mb-2"></div>
          <div className="shimmer h-4 w-full rounded"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Loading;