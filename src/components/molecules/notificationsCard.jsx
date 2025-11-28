import { Paragraph } from '../atoms/paragraph'
import styles from './notificationsCard.module.css'

function NotificationsCard({ mysNotifications }) {
  return (
    <>
      {
        mysNotifications.map((item, i) =>{
          return (
            <div key={i} className={`${styles.card} ${i < 3 ? styles.unread : ''}`}>
              <span className={styles.notifyIcon}>{item.icon}</span>
              <div className={styles.containerTitles}>
                <Paragraph size='small' align='left'>{item.title} </Paragraph>
                <Paragraph size='small'>{item.event}</Paragraph>
                <small>{item.time}</small>
              </div>
              <button className={styles.deleteNotify}>{item.delete}</button>
            </div>
          )
        })
      }
    </>
    )
}

export { NotificationsCard }