import { Bell } from 'lucide-react'
import styles from './headerUser.module.css'
import { Button } from '../atoms/button'

function HeaderUser({ setModalIsOpen, setNotifyOpen }) {
  const handleClick = () => {
    setModalIsOpen(true)
  }

  const handleCli =() =>{
    setNotifyOpen(true)
  }
  
  return (
    <div className={styles.login}>
      <span className={styles.containnerIcon}>
        <Bell className={styles.notifications}onClick={handleCli}/>
      </span>
      <span className={styles.separator}></span>
      <Button
        onClick={handleClick}
        type='submit'
        variant='secondary'
        text={'Iniciar Sesión'}
      />
    </div>
  )
}

export { HeaderUser }