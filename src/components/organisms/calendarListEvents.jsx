import { CalendarDays, Hourglass, MapPinHouse } from 'lucide-react'
import { Button } from '../atoms/button'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import styles from './calendarListEvents.module.css'

function ListEvents({eventos, eliminarEvento}) {
  return (
    <div className={styles.upcomingEvent}>
          <div className={styles.listaEventosWrapper}>
            <Title level='h4'>Próximos eventos</Title>
            <div className={styles.eventosGrid}>
              {eventos.map((evento) => (
                <div key={evento.id} className={styles.eventoCard}>
                  <Button
                    text={'✕'}
                    onClick={() => eliminarEvento(evento.id)}
                    className={styles.btnEliminar}
                  />
                  <Paragraph size='small' className={`${styles.badge} ${styles['badge' + evento.categoria]}`}>
                    {evento.categoria}
                  </Paragraph>
                  <Title level='h5'>{evento.titulo}</Title>
                  <div className={styles.eventoDetalles}>
                    <div className={styles.infoItem}>
                      <CalendarDays size={14} color='#114c6a'/>
                      <Paragraph size='small'>{evento.fecha}</Paragraph>
                    </div>
                    <div className={styles.infoItem}>
                      <Hourglass size={14} color='#114c6a'/>
                      <Paragraph size='small'>{evento.horaInicio} - {evento.horaFin}</Paragraph>
                    </div>
                    <div className={styles.infoItem}>
                      <MapPinHouse size={14} color='#f70a0aff'/>
                      <Paragraph size='small'>{evento.lugar}</Paragraph>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}

export { ListEvents }