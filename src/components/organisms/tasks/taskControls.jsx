import { TaskTabs } from '../../molecules/tasks/taskTabs'
import { TaskFilters } from '../../molecules/tasks/taskFilters'
import styles from './taskControls.module.css'

function TaskControls({ 
  activeTab, 
  onTabChange, 
  showFilters, 
  onToggleFilters,
  filters,
  onFilterChange
}) {
  return (
    <div className={styles.tabsContainer}>
      <TaskTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
        onToggleFilters={onToggleFilters}
      />
      {showFilters && (
        <TaskFilters
          filters={filters}
          onFilterChange={onFilterChange}
        />
      )}
    </div>
  )
}

export { TaskControls }