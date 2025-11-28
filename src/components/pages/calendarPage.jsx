import { Plus } from 'lucide-react'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import { MyTemplate } from '../templates/myTemplate'
import styles from './calendarPage.module.css'
import { Button } from '../atoms/button'
import { useState } from 'react'
import { NewEventModal } from '../organisms/modalNewEvent'

function CalendarPage() {
  const [formEventOpen, setFormEventOpen] = useState(false)

  const handleEventOpen = (e) => {
    e.preventDefault()
    setFormEventOpen(true)
  }
  return (
    <MyTemplate className={styles.calendar}>
      {formEventOpen ? <NewEventModal setFormEventOpen={setFormEventOpen} /> : ''}
      <div className={styles.header}>
        <div className={styles.containerTitles}>
          <Title level='h3' align='left'>Calendario</Title>
          <Paragraph>Visualiza tus eventos y reuniones</Paragraph>
        </div>
        <Button
        variant='default'
          text={'+ Nuevo Evento'}
          onClick={handleEventOpen}
          className={styles.btnEvents}
        />
      </div>
      <div className={styles.containerCalendar}>
        <div className={styles.ContCalendar}>

        </div>
        <div className={styles.listEvents}>

        </div>
        <div className={styles.upcomingEvent}>

        </div>
      </div>
    </MyTemplate>
  )
}

export { CalendarPage }