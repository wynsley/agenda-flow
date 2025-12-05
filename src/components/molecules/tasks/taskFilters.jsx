import { Select } from '../../atoms/select'
import { Paragraph } from '../../atoms/paragraph'
import styles from './taskFilters.module.css'

function TaskFilters({ filters, onFilterChange }) {
  return (
    <div className={styles.filtersPanel}>
      <div className={styles.filterGroup}>
        <Paragraph
          text='Prioridad'
          size='medium'
        />
        <Select
          value={filters.priority}
          onChange={(e) => onFilterChange({ ...filters, priority: e.target.value })}
          options={[
            { value: 'all', label: 'Todas' },
            { value: 'Alta', label: 'Alta' },
            { value: 'Media', label: 'Media' },
            { value: 'Baja', label: 'Baja' }
          ]}
          variant='secondary'
          size='small'
        />
      </div>
      <div className={styles.filterGroup}>
        <Paragraph
          text='Categoría'
          size='medium'
        />
        <Select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          options={[
            { value: 'all', label: 'Todas' },
            { value: 'Trabajo', label: 'Trabajo' },
            { value: 'Personal', label: 'Personal' },
            { value: 'Reuniones', label: 'Reuniones' },
            { value: 'Clientes', label: 'Clientes' }
          ]}
          variant='secondary'
          size='small'
        />
      </div>
    </div>
  )
}

export { TaskFilters }