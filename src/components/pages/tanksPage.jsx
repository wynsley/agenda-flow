import { useState } from 'react'
import { MyTemplate } from '../templates/myTemplate'
import { ModalNewTask } from '../organisms/modalNewTask'
import { TaskHeader } from '../organisms/tasks/taskHeader'
import { TaskControls } from '../organisms/tasks/taskControls'
import { TaskList } from '../organisms/tasks/taskList'
import { TaskStats } from '../molecules/tasks/taskState'
import styles from './tanksPage.module.css'

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
  const [taskMenuOpen, setTaskMenuOpen] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
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
    setTaskMenuOpen(null)
  }

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    ))
    setEditingTask(null)
  }

  const handleEditTask = (task) => {
    setEditingTask(task)
    setNewTaskOpen(true)
    setTaskMenuOpen(null)
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

  const filteredTasks = getFilteredTasks()
  const pendingTasks = tasks.filter(t => !t.completed).length
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length

  return (
    <MyTemplate className={styles.tasks}>
      {newTaskOpen && (
        <ModalNewTask
          setNewTaskOpen={setNewTaskOpen}
          addTask={editingTask ? editTask : addTask}
          editingTask={editingTask}
          onClose={() => {
            setNewTaskOpen(false)
            setEditingTask(null)
          }}
        />
      )}

      <TaskHeader onNewTask={handleTaskOpen} />

      <TaskControls
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        filters={filters}
        onFilterChange={setFilters}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onEditTask={handleEditTask}
        onDeleteTask={deleteTask}
        taskMenuOpen={taskMenuOpen}
        onMenuToggle={setTaskMenuOpen}
      />

      <TaskStats
        pendingTasks={pendingTasks}
        completedTasks={completedTasks}
        totalTasks={totalTasks}
      />
    </MyTemplate>
  )
}

export { TanksPage }