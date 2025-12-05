import { LogOut } from 'lucide-react'
import styles from './LogoutSection.module.css'

function LogoutSection({ onLogout }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionTitle}>Cerrar Sesión</h3>
      <p className={styles.sectionSubtitle}>
        Sal de tu cuenta de forma segura
      </p>
      <button onClick={onLogout} className={styles.btnLogout}>
        <LogOut size={18} />
        Cerrar Sesión
      </button>
    </div>
  )
}

export { LogoutSection }