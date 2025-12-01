import { useState } from "react";
import { Button } from "../atoms/button";
import { Paragraph } from "../atoms/paragraph";
import { Title } from "../atoms/titles";
import { MyTemplate } from "../templates/myTemplate";
import styles from "./remindersPage.module.css";
import { Bell, Clock, Icon, Tag } from "lucide-react";

function RemindersPage() {
  // Lista de la primera parte
  const minTarget = [
    {
      iconn: Clock,
      numero: 5,
      texto: "Activos",
    },
    {
      iconn: Bell,
      numero: 3,
      texto: "Hoy",
    },
    {
      iconn: Tag,
      numero: 4,
      texto: "Categorias",
    },
    {
      iconn: Bell,
      numero: 8,
      texto: "Total",
    },
  ];

  // Lista de recordatorios
  const [reminders, setReminders] = useState([
    {
      id: 1,
      active: true,
      icon: Bell,
      title: "Enviar reporte semanal",
      text: "Preparar documentación",
      hora: "09:00",
      dato: "Trabajo",
    },
    {
      id: 2,
      active: false,
      icon: Bell,
      title: "Reunión con equipo",
      text: "Revisión de proyecto",
      hora: "14:00",
      dato: "Trabajo",
    },
    {
      id: 3,
      active: true,
      icon: Bell,
      title: "Llamada cliente",
      text: "Seguimiento de propuesta",
      hora: "16:00",
      dato: "Trabajo",
    },
    {
      id: 4,
      active: false,
      icon: Bell,
      title: "Gimnasio",
      text: "Rutina de cardio",
      hora: "18:00",
      dato: "Personal",
    },
    {
      id: 5,
      active: true,
      icon: Bell,
      title: "Compras",
      text: "Supermercado semanal",
      hora: "19:00",
      dato: "Personal",
    },
    {
      id: 6,
      active: true,
      icon: Bell,
      title: "Compras",
      text: "Supermercado semanal",
      hora: "19:00",
      dato: "Personal",
    },
    {
      id: 7,
      active: true,
      icon: Bell,
      title: "Compras",
      text: "Supermercado semanal",
      hora: "19:00",
      dato: "Personal",
    },
    {
      id: 8,
      active: true,
      icon: Bell,
      title: "Compras",
      text: "Supermercado semanal",
      hora: "19:00",
      dato: "Personal",
    },
  ]);

  // Lista de recordatorios po r categoria
  const cardRecordatorioCategoria = [
    {
      id: 1,
      numeroRec: 4,
      textoRec: "Trabajo"
    },
    {
      id: 2,
      numeroRec: 2,
      textoRec: "Personal"
    },
    {
      id: 3,
      numeroRec: 1,
      textoRec: "Finanzas"
    },
    {
      id: 4,
      numeroRec: 1,
      textoRec: "Salud"
    }
  ]

  const [formEventOpen, setFormEventOpen] = useState(false);

  const handleEventOpen = (e) => {
    e.preventDefault();
    setFormEventOpen(true);
  };

  // Función para cambiar el estado activo/inactivo
  const handleToggleActive = (id) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, active: !reminder.active }
          : reminder
      )
    );
  };

  return (
    <MyTemplate className={styles.home}>
      {formEventOpen ? (
        <NewEventModal setFormEventOpen={setFormEventOpen} />
      ) : (
        ""
      )}
      <div className={styles.header}>
        <div>
          <Title level="h3" align="left">
            Recordatorio
          </Title>
          <Paragraph>Gestiona tus recordatorios</Paragraph>
        </div>
        <Button
          variant="default"
          text={"+ Nuevo Recordatorio"}
          onClick={handleEventOpen}
          className={styles.btnEvents}
        />
      </div>

      <section>
        <div className={styles.minTargetContainer}>
          {minTarget.map((item, index) => {
            const Icon = item.iconn;
            return (
              <div key={index} className={styles.minTarget}>
                <Icon className={styles.minTarget_icon} />
                <aside>{item.numero}</aside>
                <p>{item.texto}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.allReminders}>
        <div className={styles.allReminders_header}>
          <Title level="h4" align="left" className={styles.allReminders_item}>
            Todos los recordatorios
          </Title>
        </div>
        <div className={styles.allReminders_container}>
          {reminders.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.reminderCard}>
                <Icon className={styles.reminderCard_icon}/>
                <div className={styles.reminderCard_text}>
                  <aside>{item.title}</aside>
                  <p>{item.text}</p>
                  <div className={styles.reminderCard_data}>
                    <aside>{item.hora}</aside>
                    <aside>{item.dato}</aside>
                  </div>
                </div>

                
                <div className={styles.toggleContainer}>
                  <button
                    onClick={() => handleToggleActive(item.id)}
                    className={`${styles.toggleButton} ${
                      item.active ? styles.active : styles.inactive
                    }`}
                  >
                    <span
                      className={`${styles.toggleCircle} ${
                        item.active ? styles.active : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.recordatorioCategoria}>
        <div className={styles.recordatorioCategoria_header}>
          <Title level="h4" align="left" >
            Recordatorios por categoria
          </Title>
        </div>
        <div className={styles.recordatorioCategoria_container}>
          {cardRecordatorioCategoria.map((item)=>{
            return (
              <div className={styles.recordatorioCategoria_card} key={item.id}>
                <Paragraph>{item.numeroRec}</Paragraph>
                <Paragraph>{item.textoRec}</Paragraph>
              </div>
            )
          })}
        </div>
      </section>
    </MyTemplate>
  );
}

export { RemindersPage };
