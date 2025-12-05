import styles from './profileStatCard.module.css'

function StatCard({ label, value }) {
  return (
    <div className={styles.statCard}>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statValue}>{value}</p>
    </div>
  )
}

export { StatCard }