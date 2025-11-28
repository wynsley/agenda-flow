import styles from './paragraph.module.css';

function Paragraph ({ 
  children,
  text, 
  className = '',
  size = 'medium',       
  variant = 'default',    
  align = 'left',         
  ...props 
}) {
  const sizeClass = styles[size] || styles.medium;
  const variantClass = styles[variant] || styles.default;
  const alignClass = styles[align] || '';
  
  return (
    <p 
      className={`${styles.paragraph} ${sizeClass} ${variantClass} ${alignClass} ${className}`}
      {...props}
    >
      {children || text}
    </p>
  );
};

export { Paragraph };