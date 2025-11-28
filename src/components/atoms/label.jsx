import styles from './label.module.css'

function Label({ 
  children, 
  className, 
  htmlFor, 
  text,  
  size ='medium',
  align=  'left',
  ...props }) {
  const sizeClass = styles[size] || styles.medium;
  const alignClass = styles [align] || '';
  
  return (
    <label 
      htmlFor={htmlFor}
      className={`${styles.label} ${sizeClass} ${alignClass} ${className || ""}`}
      {...props}
    >
      {children || text}
    </label>
  )
}

export {Label}