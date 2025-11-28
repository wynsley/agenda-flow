import styles from './select.module.css';

function Select({
  options,
  name,
  value,
  onChange,
  required,
  className,
  variant= 'default',
  size= 'medium',
  ...props
}) {

  const variantCla = styles[variant] || styles.default;
  const sizeCla = styles[size] || styles.medium;
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${styles.select} ${variantCla} ${sizeCla} ${className}`}
      {...props}
    >
      {
        options.map((opt, o) =>{
          return(
            <option key={o} value={opt.value} className={styles.options}>
              {opt.label}
            </option>
          )
        })
      }
    </select>
  );
}

export { Select };
