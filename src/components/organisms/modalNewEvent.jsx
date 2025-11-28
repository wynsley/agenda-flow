import { useState } from 'react'
import { Button } from '../atoms/button'
import styles from './modalNewEvent.module.css'
import { Paragraph } from '../atoms/paragraph'
import { FormItem } from '../molecules/formItem'

function NewEventModal({ setFormEventOpen }) {
  const [isClosed, setIsClosed] = useState(false)

  const formFields = [
    {
      text: 'Título del evento',
      htmlFor: 'title',
      type: 'text',
      name:'title',
    },
    {
      text: 'Día del mes',
      htmlFor: 'day',
      type: 'number',
      name:'day',
    },
    {
      text: 'Horario',
      htmlFor: 'schedule',
      type: 'time',
      name:'schedule',
      placeholde: '10:00 - 11:30'
    },
    {
      text: 'Ubicación',
      htmlFor: 'location',
      type: 'text',
      name:'location',
    },
    {
      text: 'Tipo',
      htmlFor: 'type',
      type: 'select',
      name:'type',
      options : [
        {value : '0', label: 'Selecciona una opción'},
        {value : 'word', label: 'Trabajo'},
        {value : 'meeting', label: 'Reunión'},
        {value : 'training', label: 'Capacitación'},
      ]
    },
  ]

  const handleClose = () => {
    setIsClosed(true)
    setTimeout(() => {
      setFormEventOpen(false)
    }, 400)
  }
  //para hacer click fuera del modal 
  const handleBgClik = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={handleBgClik} className={`${styles.bgCont} ${isClosed ? styles.closing : ''}`}>
      <form 
        className={`${styles.form} ${isClosed ? styles.closing: ''}`}
        action="" 
        onClick={handleModalClick}>
        <Paragraph align='center' size='large'
          text={'Nuevo Evento'}
          className={styles.titleForm}
        />
        <FormItem formFields={formFields}
        
        />
        <Button
          variant='secondary'
          text={'Crear'}
          onClick={handleClose}
          className={styles.btnEvent}
        />

      </form>
    </div>
  )
}

export { NewEventModal }