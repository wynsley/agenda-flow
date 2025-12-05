import { StatCard } from '../../molecules/profile/profileStatCard'
import styles from './statesSection.module.css'

function StatsSection({ completedTasks, totalEvents, activeReminders }) {
  return (
    <div className={styles.statsGrid}>
      <StatCard label="Tareas completadas" value={completedTasks} />
      <StatCard label="Eventos creados" value={totalEvents} />
      <StatCard label="Recordatorios activos" value={activeReminders} />
    </div>
  )
}

export { StatsSection }