import { Hourglass, MapPinHouse } from 'lucide-react'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import styles from './calendarEventsDay.module.css'

function EnventDay({diaSeleccionado,eventosDelDia}) {
  return (
    <div className={styles.listEvents}>
          <div className={styles.eventosDiaWrapper}>
            <Title 
              level='h4'
              className={styles.tituloEventosDia}>
              Eventos del día {diaSeleccionado}
            </Title>
            <div className={styles.listaEventosDia}>
              {eventosDelDia.length > 0 ? (
                eventosDelDia.map((evento) => (
                  <div key={evento.id} className={styles.eventoCardMini}>
                    <Title level='h5' className={styles.eventoTituloMini}>{evento.titulo}</Title>
                    <div className={styles.eventoInfo}>
                      <div className={styles.infoItem}>
                        <Hourglass size={16} color='#114c6a'/>
                        <Paragraph size='small'>{evento.horaInicio} - {evento.horaFin}</Paragraph>
                      </div>
                      <div className={styles.infoItem}>
                        <MapPinHouse size={16} color='#f70a0aff'/>
                        <Paragraph size='small'>{evento.lugar}</Paragraph>
                      </div>
                      <span className={`${styles.badge} ${styles['badge' + evento.categoria]}`}>
                        {evento.categoria}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <small className={styles.sinEventos}>No hay eventos para este día</small>
              )}
            </div>
          </div>
        </div>
    )
}

export { EnventDay }