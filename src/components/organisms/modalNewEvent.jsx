import { useState } from 'react'
import { Button } from '../atoms/button'
import styles from './modalNewEvent.module.css'
import { Paragraph } from '../atoms/paragraph'
import { FormItem } from '../molecules/formItem'

function NewEventModal({ setFormEventOpen, agregarEvento }) {
  const [isClosed, setIsClosed] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    location: '',
    type: '0'
  })

  const formFields = [
    {
      text: 'Título del evento',
      htmlFor: 'title',
      type: 'text',
      name:'title',
      value: formData.title,
      onChange: (e) => setFormData({...formData, title: e.target.value})
    },
    {
      text: 'Fecha',
      htmlFor: 'fecha',
      type: 'date',
      name:'fecha',
      value: formData.fecha,
      onChange: (e) => setFormData({...formData, fecha: e.target.value})
    },
    {
      text: 'Hora inicio',
      htmlFor: 'horaInicio',
      type: 'time',
      name:'horaInicio',
      value: formData.horaInicio,
      onChange: (e) => setFormData({...formData, horaInicio: e.target.value})
    },
    {
      text: 'Hora fin',
      htmlFor: 'horaFin',
      type: 'time',
      name:'horaFin',
      value: formData.horaFin,
      onChange: (e) => setFormData({...formData, horaFin: e.target.value})
    },
    {
      text: 'Ubicación',
      htmlFor: 'location',
      type: 'text',
      name:'location',
      value: formData.location,
      onChange: (e) => setFormData({...formData, location: e.target.value})
    },
    {
      text: 'Tipo',
      htmlFor: 'type',
      type: 'select',
      name:'type',
      value: formData.type,
      onChange: (e) => setFormData({...formData, type: e.target.value}),
      options : [
        {value : '0', label: 'Selecciona una opción'},
        {value : 'Trabajo', label: 'Trabajo'},
        {value : 'Reunión', label: 'Reunión'},
        {value : 'Capacitación', label: 'Capacitación'},
        {value : 'Presentación', label: 'Presentación'},
        {value : 'Social', label: 'Social'},
      ]
    },
  ]

  const handleClose = () => {
    setIsClosed(true)
    setTimeout(() => {
      setFormEventOpen(false)
    }, 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.fecha || !formData.horaInicio || formData.type === '0') {
      alert('Por favor completa todos los campos obligatorios')
      return
    }

    const nuevoEvento = {
      fecha: formData.fecha,
      titulo: formData.title,
      horaInicio: formData.horaInicio,
      horaFin: formData.horaFin || formData.horaInicio,
      lugar: formData.location || 'Sin ubicación',
      categoria: formData.type
    }

    agregarEvento(nuevoEvento)
    handleClose()
  }

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
        onSubmit={handleSubmit}
        onClick={handleModalClick}>
        <Paragraph align='center' size='large'
          text={'Nuevo Evento'}
          className={styles.titleForm}
        />
        <FormItem formFields={formFields}
          inputSize='small'
        />
        <Button
          variant='secondary'
          text={'Crear'}
          type='submit'
          className={styles.btnEvent}
        />
      </form>
    </div>
  )
}

export { NewEventModal }