import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  elevation = 'card',
  hover = false,
  onClick,
  ...props 
}) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: ''
  };
  
  const elevations = {
    none: '',
    card: 'shadow-card',
    elevated: 'shadow-elevated',
    floating: 'shadow-floating'
  };
  
  const baseClasses = `
    bg-surface rounded-xl border border-secondary-100
    ${paddings[padding]}
    ${elevations[elevation]}
    ${hover ? 'transition-all duration-300 hover:shadow-elevated hover:scale-[1.02]' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  const CardComponent = onClick ? motion.div : 'div';
  const motionProps = onClick ? {
    whileHover: { scale: 1.02, y: -4 },
    whileTap: { scale: 0.98 },
    onClick
  } : {};

  return (
    <CardComponent
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

export default Card;