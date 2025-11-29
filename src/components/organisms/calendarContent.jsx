import styles from './calendarContent.module.css'
import { Title } from '../atoms/titles'
import { Button } from '../atoms/button'

function Calendar({ 
  fechaActual, 
  setFechaActual, 
  diaSeleccionado, 
  setDiaSeleccionado,
  tienEventos 
}) {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  // Lógica para obtener los días del mes
  const obtenerDiasDelMes = (fecha) => {
    const año = fecha.getFullYear()
    const mes = fecha.getMonth()
    const primerDia = new Date(año, mes, 1)
    const ultimoDia = new Date(año, mes + 1, 0)
    const diasEnMes = ultimoDia.getDate()
    let primerDiaSemana = primerDia.getDay()
    primerDiaSemana = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1

    const dias = []
    for (let i = 0; i < primerDiaSemana; i++) {
      dias.push(null)
    }
    for (let i = 1; i <= diasEnMes; i++) {
      dias.push(i)
    }
    return dias
  }

  // Cambiar de mes
  const cambiarMes = (direccion) => {
    const nuevaFecha = new Date(fechaActual)
    nuevaFecha.setMonth(nuevaFecha.getMonth() + direccion)
    setFechaActual(nuevaFecha)
  }

  // Seleccionar mes específico
  const seleccionarMes = (mes) => {
    const nuevaFecha = new Date(fechaActual)
    nuevaFecha.setMonth(mes)
    setFechaActual(nuevaFecha)
  }

  // Manejar selección de día
  const handleDiaClick = (dia) => {
    if (dia) {
      const fechaSeleccionada = `${fechaActual.getFullYear()}-${String(fechaActual.getMonth() + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
      setDiaSeleccionado(fechaSeleccionada)
    }
  }

  const dias = obtenerDiasDelMes(fechaActual)

  // Verificar si el día está seleccionado
  const esDiaSeleccionado = (dia) => {
    if (!dia) return false
    const fechaDia = `${fechaActual.getFullYear()}-${String(fechaActual.getMonth() + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
    return fechaDia === diaSeleccionado
  }

  return (
    <div className={styles.ContCalendar}>
      <div className={styles.calendarioWrapper}>
        <div className={styles.headerCalendario}>
          <Title 
            level='h4'
            align='left'
            className={styles.tituloMes}>
            {meses[fechaActual.getMonth()]} {fechaActual.getFullYear()}
          </Title>
          <div className={styles.controles}>
            <select 
              className={styles.selectorMes}
              value={fechaActual.getMonth()}
              onChange={(e) => seleccionarMes(parseInt(e.target.value))}
            >
              {meses.map((mes, index) => (
                <option key={index} value={index}>{mes}</option>
              ))}
            </select>
            <Button
              variant='default'
              text={'←'}
              onClick={() => cambiarMes(-1)}
              className={styles.btnNav}
            />
            <Button
              variant='default'
              text={'→'}
              onClick={() => cambiarMes(1)}
              className={styles.btnNav}
            />
          </div>
        </div>
        
        <div className={styles.diasSemana}>
          {diasSemana.map((dia, index) => (
            <div key={index} className={styles.diaSemanaHeader}>
              {dia}
            </div>
          ))}
        </div>

        <div className={styles.diasGrid}>
          {dias.map((dia, index) => (
            <Button
              text={dia}
              key={index}
              onClick={() => handleDiaClick(dia)}
              disabled={!dia}
              className={`${styles.diaCelda} ${!dia ? styles.invisible : ''} ${
                esDiaSeleccionado(dia) ? styles.seleccionado : ''
              } ${tienEventos(dia) ? styles.conEvento : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Calendar }