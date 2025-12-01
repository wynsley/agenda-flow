import styles from './input.module.css'

function Input({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  required,
  disabled,
  className,
  size= 'medium',
  align= 'left',
  variant= 'default',
  ...props
}) {

  const sizeClassn = styles[size] || styles.medium;
  const alignClassn = styles[align] || '';
  const variantClassn = styles[variant]  || styles.default;
  return (
    <input
      type={type}
      name={name}  
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`${styles.input} ${sizeClassn} ${alignClassn} ${variantClassn} ${className}`}
      {...props}
    />
  );
}

export { Input };