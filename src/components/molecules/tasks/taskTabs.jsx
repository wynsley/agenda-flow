import { Button } from '../../atoms/button'
import styles from './taskTabs.module.css'

function TaskTabs({ activeTab, onTabChange, onToggleFilters }) {
  return (
    <div className={styles.tabsHeader}>
      <div className={styles.tabs}>
        <Button
          className={`${styles.tab} ${activeTab === 'hoy' ? styles.active : ''}`}
          onClick={() => onTabChange('hoy')}
          text='Hoy'
        />
        <Button
          className={`${styles.tab} ${activeTab === 'semana' ? styles.active : ''}`}
          onClick={() => onTabChange('semana')}
          text='Esta Semana'
        />
        <Button
          className={`${styles.tab} ${activeTab === 'completadas' ? styles.active : ''}`}
          onClick={() => onTabChange('completadas')}
          text='Completadas'
        />
      </div>
      <Button
        className={styles.btnFilters}
        onClick={onToggleFilters}
        text='Filtros'
      />
    </div>
  )
}

export { TaskTabs }