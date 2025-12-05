import { AlertMessage } from '../../atoms/alert'
import styles from './modalPassword.module.css'

function PasswordModal({ 
  isOpen, 
  passwordData, 
  onPasswordDataChange, 
  onSubmit, 
  onClose, 
  error 
}) {
  if (!isOpen) return null

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.modalTitle}>Cambiar Contraseña</h3>

        <AlertMessage message={error} type="error" />

        <div className={styles.modalField}>
          <label className={styles.label}>Contraseña actual</label>
          <input
            type="password"
            value={passwordData.oldPassword}
            onChange={(e) => onPasswordDataChange({ 
              ...passwordData, 
              oldPassword: e.target.value 
            })}
            className={styles.input}
          />
        </div>

        <div className={styles.modalField}>
          <label className={styles.label}>Nueva contraseña</label>
          <input
            type="password"
            value={passwordData.newPassword}
            onChange={(e) => onPasswordDataChange({ 
              ...passwordData, 
              newPassword: e.target.value 
            })}
            className={styles.input}
          />
        </div>

        <div className={styles.modalField}>
          <label className={styles.label}>Confirmar nueva contraseña</label>
          <input
            type="password"
            value={passwordData.confirmPassword}
            onChange={(e) => onPasswordDataChange({ 
              ...passwordData, 
              confirmPassword: e.target.value 
            })}
            className={styles.input}
          />
        </div>

        <div className={styles.modalButtons}>
          <button onClick={onSubmit} className={styles.btnSave}>
            Cambiar
          </button>
          <button onClick={onClose} className={styles.btnCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export { PasswordModal }