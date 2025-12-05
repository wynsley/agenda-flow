import { Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './headerSearch.module.css'

function HeaderSearch() {
  
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    navigate(`/buscar?query=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className={styles.search}>
      <div className={styles.inputWrapper}>
        <Search className={styles.icon} onClick={handleSearch}/>
        <input 
          type="text"
          placeholder="Buscar..."
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  )
}

export { HeaderSearch }
