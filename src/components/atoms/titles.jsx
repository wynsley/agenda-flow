import styles from './titles.module.css'

function Title ({
  level= 'h1',
  children,
  text,
  className='',
  variant = 'default',
  align ='left',
  ...props
}) {

  const Tag = level;
  
  const variantClass = styles[variant] || styles.default;
  const alignClass = styles[align] || '';
  
  {
    return (
        <Tag
          className={`${styles.title} ${variantClass} ${alignClass} ${className}`}
          {...props}
        >
        {children || text}
        </Tag>
      )
  }

}

export { Title }