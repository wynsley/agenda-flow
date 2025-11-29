import { useState } from 'react'
import { Button } from '../atoms/button'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import { MyTemplate } from '../templates/myTemplate'
import styles from './tanksPage.module.css'
import { ModalNewTask } from '../organisms/modalNewTask'

function TanksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Reunión con equipo',
      description: 'Planificación del proyecto Q1',
      hour: '11:30',
      category: 'Reuniones',
      priority: 'Alta',
      completed: false
    },
    {
      id: 2,
      title: 'Actualizar documentación',
      description: 'Documentar nuevas funcionalidades',
      hour: '14:00',
      category: 'Trabajo',
      priority: 'Media',
      completed: false
    },
    {
      id: 3,
      title: 'Llamada con cliente',
      description: 'Seguimiento de proyecto actual',
      hour: '16:00',
      category: 'Clientes',
      priority: 'Media',
      completed: false
    }
  ])

  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('hoy')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priority: 'all',
    category: 'all'
  })

  const handleTaskOpen = (e) => {
    e.preventDefault()
    setNewTaskOpen(true)
  }

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
      completed: false
    }
    setTasks([...tasks, task])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const getFilteredTasks = () => {
    let filtered = tasks

    if (activeTab === 'completadas') {
      filtered = filtered.filter(task => task.completed)
    } else if (activeTab === 'hoy') {
      filtered = filtered.filter(task => !task.completed)
    }

    if (filters.priority !== 'all') {
      filtered = filtered.filter(task => task.priority === filters.priority)
    }
    if (filters.category !== 'all') {
      filtered = filtered.filter(task => task.category === filters.category)
    }

    return filtered
  }

  const getPriorityClass = (priority) => {
    return `${styles.taskPriority} ${styles['priority-' + priority.toLowerCase()]}`
  }

  const filteredTasks = getFilteredTasks()
  const pendingTasks = tasks.filter(t => !t.completed).length
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length

  return (
    <MyTemplate className={styles.tasks}>
      {newTaskOpen && (
        <ModalNewTask
          setNewTaskOpen={setNewTaskOpen}
          addTask={addTask}
        />
      )}
      <div className={styles.header}>
        <div className={styles.containerTitles}>
          <Title level='h3' align='left' text={'Tareas'} />
          <Paragraph size='medium' text={'Gestiona tus tareas diarias'} />
        </div>
        <Button
          variant='default'
          text={'+ Nueva Tarea'}
          onClick={handleTaskOpen}
          className={styles.btnTasks}
        />
      </div>

      {/* Tabs y Filtros */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <div className={styles.tabs}>
            <Button
              className={`${styles.tab} ${activeTab === 'hoy' ? styles.active : ''}`}
              onClick={() => setActiveTab('hoy')}
              text={'Hoy'}
            />
            <Button
              className={`${styles.tab} ${activeTab === 'semana' ? styles.active : ''}`}
              onClick={() => setActiveTab('semana')}
              text={'Esta Semana'}
            />
            <Button
              className={`${styles.tab} ${activeTab === 'completadas' ? styles.active : ''}`}
              onClick={() => setActiveTab('completadas')}
              text={' Completadas'}
            />
          </div>
          <Button 
            className={styles.btnFilters} 
            onClick={() => setShowFilters(!showFilters)}
            text={'Filtros'}
          />
        </div>

        {showFilters && (
          <div className={styles.filtersPanel}>
            <div className={styles.filterGroup}>
              <label>Prioridad</label>
              <select
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
              >
                <option value="all">Todas</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Categoría</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <option value="all">Todas</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Personal">Personal</option>
                <option value="Reuniones">Reuniones</option>
                <option value="Clientes">Clientes</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Lista de Tareas */}
      <div className={styles.tasksListContainer}>
        <div className={styles.tasksList}>
          {filteredTasks.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No hay tareas para mostrar</p>
            </div>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className={styles.taskCard}>
                <div className={styles.taskContent}>
                  <input
                    type="checkbox"
                    className={styles.taskCheckbox}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <div className={styles.taskInfo}>
                    <h3 className={`${styles.taskTitle} ${task.completed ? styles.completed : ''}`}>
                      {task.title}
                    </h3>
                    <p className={`${styles.taskDescription} ${task.completed ? styles.completed : ''}`}>
                      {task.description}
                    </p>
                    <div className={styles.taskMeta}>
                      <span className={styles.taskHour}>🕒 {task.hour}</span>
                      <span className={styles.taskCategory}>{task.category}</span>
                      <span className={getPriorityClass(task.priority)}>
                        {task.priority === 'Alta' && '🔴 '}
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <span className={styles.taskMenu} onClick={() => deleteTask(task.id)}>
                    ⋮
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Estadísticas */}
      <div className={styles.statsContainer}>
        <div className={`${styles.statCard} ${styles.pending}`}>
          <div className={styles.statInfo}>
            <h3>Tareas Pendientes</h3>
            <p>{pendingTasks}</p>
          </div>
          <div className={styles.statIcon}>⏰</div>
        </div>
        <div className={`${styles.statCard} ${styles.completed}`}>
          <div className={styles.statInfo}>
            <h3>Completadas</h3>
            <p>{completedTasks}</p>
          </div>
          <div className={styles.statIcon}>✓</div>
        </div>
        <div className={`${styles.statCard} ${styles.total}`}>
          <div className={styles.statInfo}>
            <h3>Total</h3>
            <p>{totalTasks}</p>
          </div>
          <div className={styles.statIcon}>∑</div>
        </div>
      </div>
    </MyTemplate>
  )
}

export { TanksPage }