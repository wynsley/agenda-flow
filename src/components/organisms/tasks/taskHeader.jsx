import { Button } from '../../atoms/button'
import { Paragraph } from '../../atoms/paragraph'
import { Title } from '../../atoms/titles'
import styles from './taskHeader.module.css'

function TaskHeader({ onNewTask }) {
  return (
    <div className={styles.header}>
      <div className={styles.containerTitles}>
        <Title level='h3' align='left' text='Tareas' />
        <Paragraph size='medium' text='Gestiona tus tareas diarias' />
      </div>
      <Button
        variant='default'
        text='+ Nueva Tarea'
        onClick={onNewTask}
        className={styles.btnTasks}
      />
    </div>
  )
}

export { TaskHeader }