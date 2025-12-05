import { Lock } from 'lucide-react'
import styles from './SecuritySection.module.css'

function SecuritySection({ onChangePassword }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionTitle}>Seguridad</h3>
      <p className={styles.sectionSubtitle}>
        Administra tu contraseña y seguridad de cuenta
      </p>
      <button onClick={onChangePassword} className={styles.btnSecondary}>
        <Lock size={18} />
        Cambiar Contraseña
      </button>
    </div>
  )
}

export { SecuritySection }