import styles from './profileField.module.css'

function ProfileField({ 
  label, 
  value, 
  icon: Icon, 
  isEditing, 
  editValue, 
  onChange, 
  placeholder,
  type = 'text' 
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {isEditing ? (
        <input
          type={type}
          value={editValue}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
      ) : (
        <div className={styles.value}>
          {Icon && <Icon size={18} color="#9ca3af" />}
          {value || 'No especificado'}
        </div>
      )}
    </div>
  )
}

export { ProfileField }