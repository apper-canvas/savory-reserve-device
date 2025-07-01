import ApperIcon from '@/components/ApperIcon';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'sm',
  icon,
  className = '' 
}) => {
  const variants = {
    default: 'bg-secondary-100 text-primary-700 border-secondary-200',
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    success: 'bg-green-100 text-green-700 border-green-200',
    warning: 'bg-orange-100 text-orange-700 border-orange-200',
    error: 'bg-red-100 text-red-700 border-red-200',
    accent: 'bg-accent-100 text-accent-700 border-accent-200'
  };
  
  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base'
  };
  
  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 16
  };

  const classes = `
    inline-flex items-center font-medium rounded-full border
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  return (
    <span className={classes}>
      {icon && (
        <ApperIcon
          name={icon}
          size={iconSizes[size]}
          className="mr-1"
        />
      )}
      {children}
    </span>
  );
};

export default Badge;