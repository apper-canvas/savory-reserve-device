import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/atoms/Input';
import ApperIcon from '@/components/ApperIcon';

const SearchBar = ({ 
  placeholder = "Search menu items...", 
  onSearch,
  onClear,
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear?.();
  };

  return (
    <div className={`relative ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        icon="Search"
        iconPosition="left"
        className="pr-12"
      />
      
      {searchTerm && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-primary-600 transition-colors"
        >
          <ApperIcon name="X" size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default SearchBar;