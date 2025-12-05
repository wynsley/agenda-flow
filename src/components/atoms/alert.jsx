import styles from './alert.module.css'

function AlertMessage({ message, type = 'success' }) {
  if (!message) return null
  
  return (
    <div className={type === 'success' ? styles.alertSuccess : styles.alertError}>
      {message}
    </div>
  )
}

export { AlertMessage }