import { forwardRef } from 'react';
import ApperIcon from '@/components/ApperIcon';

const Input = forwardRef(({ 
  label, 
  error, 
  icon, 
  iconPosition = 'left',
  type = 'text',
  className = '',
  fullWidth = true,
  ...props 
}, ref) => {
  const inputClasses = `
    block w-full px-4 py-3 rounded-lg border-2 border-secondary-200 
    bg-white text-gray-900 placeholder-gray-500
    focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none
    transition-all duration-200
    ${error ? 'border-error focus:border-error focus:ring-red-200' : ''}
    ${icon && iconPosition === 'left' ? 'pl-12' : ''}
    ${icon && iconPosition === 'right' ? 'pr-12' : ''}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon
              name={icon}
              size={18}
              className={error ? 'text-error' : 'text-gray-400'}
            />
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ApperIcon
              name={icon}
              size={18}
              className={error ? 'text-error' : 'text-gray-400'}
            />
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-error flex items-center">
          <ApperIcon name="AlertCircle" size={16} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;