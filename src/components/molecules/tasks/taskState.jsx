import { Title } from '../../atoms/titles'
import styles from './taskState.module.css'

function TaskStats({ pendingTasks, completedTasks, totalTasks }) {
  const titleOne = 'Tareas Pendientes'
  const titleTwo = 'Completadas'
  const titleTree = 'Total'
  return (
    <div className={styles.statsContainer}>
      <div className={`${styles.statCard} ${styles.pending}`}>
        <div className={styles.statInfo}>
          <Title
            text={titleOne}
            level='h4'
          />
          <p>{pendingTasks}</p>
        </div>
      </div>
      <div className={`${styles.statCard} ${styles.completed}`}>
        <div className={styles.statInfo}>
          <Title
            text={titleTwo}
            level='h4'
          />
          <p>{completedTasks}</p>
        </div>
      </div>
      <div className={`${styles.statCard} ${styles.total}`}>
        <div className={styles.statInfo}>
          <Title
            text={titleTree}
            level='h4'
          />
          <p>{totalTasks}</p>
        </div>
      </div>
    </div>
  )
}

export { TaskStats }