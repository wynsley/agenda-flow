import { X } from 'lucide-react'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import styles from './modalNotifications.module.css'
import { useState } from 'react'
import { NotificationsCard } from '../molecules/notificationsCard'
import { mysNotifications } from './arrais'
import { NotifyButtons } from '../molecules/notificationsButtonsMark'
function Notifications({ setNotifyOpen }) {
  
  const [isClous, setIsClous] = useState(false)

  const handleClose = () => {
    setIsClous(true)
    setTimeout(() => {
      setNotifyOpen(false)
    }, 400)
  }

  //cerrar el modal al hacer clic fuera
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  //evitar que el modal se cierre al hacer clic en el modal
  const handleModalCli = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className={`${styles.backgro} ${isClous ? styles.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div 
          className={`${styles.contNotify} ${isClous ? styles.closing : ''}`}
          onClick={handleModalCli}
        >
          <header className={styles.headerNotify}>
            <div className={styles.containerTitles}>
              <Title level='h4' align='left'>
                Notificaciones
              </Title>
              <Paragraph size='small' align='left'>
                3 nuevas
              </Paragraph>
            </div>
            <X 
              onClick={handleClose}
              className={styles.closeIcon} 
              size={22}
              style={{ cursor: 'pointer' }} 
            />
          </header>
          <NotifyButtons/>
          <div className={styles.containerNotify}>
            <NotificationsCard mysNotifications={mysNotifications}/>
          </div>
        </div>
      </div>
    </>
  )
}

export { Notifications }