import { useEffect, useRef } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Button } from '../../atoms/button'
import { Paragraph } from '../../atoms/paragraph'
import { Title } from '../../atoms/titles'
import styles from './taskCard.module.css'

function TaskCard({ 
  task, 
  onToggle, 
  onEdit, 
  onDelete, 
  menuOpen, 
  onMenuToggle 
}) {
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen === task.id && menuRef.current && !menuRef.current.contains(event.target)) {
        onMenuToggle(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, task.id, onMenuToggle])

  const getPriorityClass = (priority) => {
    return `${styles.taskPriority} ${styles['priority-' + priority.toLowerCase()]}`
  }

  const handleMenuToggle = (e) => {
    e.stopPropagation()
    onMenuToggle(task.id)
  }

  const handleEdit = (e) => {
    e.stopPropagation()
    onEdit(task)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      onDelete(task.id)
    }
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskContent}>
        <div className={styles.contentCard}>
          <input
            type="checkbox"
            className={styles.taskCheckbox}
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <div className={styles.taskInfo}>
            <Title
              className={task.completed ? styles.completed : ''}
              text={task.title}
              level='h4'
            />
            <Paragraph
              className={task.completed ? styles.completed : ''}
              text={task.description}
              size='small'
            />
            <div className={styles.taskMeta}>
              <span className={styles.taskHour}>{task.hour}</span>
              <span className={styles.taskCategory}>{task.category}</span>
              <span className={getPriorityClass(task.priority)}>
                {task.priority === 'Alta' && '🔴'}
                {task.priority}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.taskMenuContainer} ref={menuRef}>
          <span
            className={styles.taskMenu}
            onClick={handleMenuToggle}
          >
            <EllipsisVertical size={16} color='var(--color-blue)'/>
          </span>
          
          {menuOpen === task.id && (
            <div className={styles.taskMenuDropdown}>
              <Button
                variant='secondary'
                text='Editar'
                onClick={handleEdit}
              />
              <Button
                variant='secondary'
                text='Eliminar'
                onClick={handleDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { TaskCard }