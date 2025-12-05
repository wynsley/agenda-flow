import { TaskCard } from '../../molecules/tasks/taskCard'
import styles from './taskList.module.css'

function TaskList({ 
  tasks, 
  onToggleTask, 
  onEditTask, 
  onDeleteTask,
  taskMenuOpen,
  onMenuToggle
}) {
  return (
    <div className={styles.tasksListContainer}>
      <div className={styles.tasksList}>
        {tasks.length === 0 ? (
          <div className={styles.emptyState}>
            <small>No hay tareas para mostrar</small>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
              menuOpen={taskMenuOpen}
              onMenuToggle={onMenuToggle}
            />
          ))
        )}
      </div>
    </div>
  )
}

export { TaskList }