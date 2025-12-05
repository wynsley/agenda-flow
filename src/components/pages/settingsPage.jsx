import { Download, Globe, LockKeyhole, Palette, UserRound } from "lucide-react";
import { Paragraph } from "../atoms/paragraph";
import { Title } from "../atoms/titles";
import { MyTemplate } from "../templates/myTemplate";
import styles from "./settingsPage.module.css";
import { useState } from "react";

function SettingsPage() {
  const [selectedColor, setSelectedColor] = useState("#111827");
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [selectedTimezone, setSelectedTimezone] = useState("America");

  const languages = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "it", label: "Italiano" },
    { value: "pt", label: "Português" },
    { value: "ru", label: "Русский" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日本語" },
    { value: "ko", label: "한국어" },
    { value: "ar", label: "العربية" },
  ];

  const timezones = [
    { value: "America/Mexico_City", label: "GMT-6 (Ciudad de México)" },
    { value: "America/Cancun", label: "GMT-5 (Cancún)" },
    { value: "America/Bogota", label: "GMT-5 (Bogotá)" },
    { value: "America/Lima", label: "GMT-5 (Lima)" },
    { value: "America/Caracas", label: "GMT-4 (Caracas)" },
    { value: "America/Santiago", label: "GMT-3 (Santiago)" },
    { value: "America/Argentina/Buenos_Aires", label: "GMT-3 (Buenos Aires)" },
    { value: "America/Sao_Paulo", label: "GMT-3 (São Paulo)" },
    { value: "America/New_York", label: "GMT-5 (Nueva York)" },
    { value: "America/Chicago", label: "GMT-6 (Chicago)" },
    { value: "America/Denver", label: "GMT-7 (Denver)" },
    { value: "America/Los_Angeles", label: "GMT-8 (Los Ángeles)" },
    { value: "Europe/London", label: "GMT+0 (Londres)" },
    { value: "Europe/Paris", label: "GMT+1 (París)" },
    { value: "Europe/Madrid", label: "GMT+1 (Madrid)" },
    { value: "Europe/Berlin", label: "GMT+1 (Berlín)" },
    { value: "Europe/Rome", label: "GMT+1 (Roma)" },
    { value: "Europe/Moscow", label: "GMT+3 (Moscú)" },
    { value: "Asia/Dubai", label: "GMT+4 (Dubái)" },
    { value: "Asia/Karachi", label: "GMT+5 (Karachi)" },
    { value: "Asia/Kolkata", label: "GMT+5:30 (Nueva Delhi)" },
    { value: "Asia/Shanghai", label: "GMT+8 (Shanghái)" },
    { value: "Asia/Tokyo", label: "GMT+9 (Tokio)" },
    { value: "Asia/Seoul", label: "GMT+9 (Seúl)" },
    { value: "Australia/Sydney", label: "GMT+11 (Sídney)" },
    { value: "Pacific/Auckland", label: "GMT+13 (Auckland)" },
  ];

  // Lista de apariencias
  const listAparience = [
    {
      id: 1,
      text: "Oscuro",
    },
    {
      id: 2,
      text: "Claro",
    },
    {
      id: 3,
      text: "Auto",
    },
  ];

  // Lista de colores de acento
  const listColorAcento = [
    "#111827",
    "#4B5563",
    "#6B7280",
    "#9CA3AF",
    "#D1D5DB",
  ];

  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "Notificaciones por email",
      paraf: "Resivir actualizaciones importantes",
    },
    {
      id: 2,
      title: "Perfil publico",
      paraf: "Permitir que otros vean tu perfil",
    },
    {
      id: 3,
      title: "Autenticacion de los valores",
      paraf: "Añade una capa extra de seguridad",
    },
  ]);

  //lista de exportar datos
  const exportData = [
    {
      id: 1,
      icon: Download,
      paraf: "CSV",
    },
    {
      id: 2,
      icon: Download,
      paraf: "JSON",
    },
    {
      id: 3,
      icon: Download,
      paraf: "PDF",
    },
  ];

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
      <div>
        <div className={styles.header}>
          <Title level="h3" text="Configuración" align="left" />
          <Paragraph
            size="medium"
            align="left"
            text="Personaliza tu experiiencia en tu ordenador"
          />
        </div>
        <section className={styles.profile}>
          <ul>
            <li className={styles.profileTitle}>
              <UserRound
                size={32}
                strokeWidth={1.5}
                className={styles.profileIcon}
              />
              <Title level="h4" align="left" text="Perfil de usuario" />
            </li>
            <li className={styles.nameInputs}>
              <aside>
                <Paragraph size="medium" align="left" text="Nombre" />
                <div>
                  <input type="text" placeholder="Juan" />
                </div>
              </aside>
              <aside>
                <Paragraph size="medium" align="left" text="Apellido" />
                <div>
                  <input type="text" placeholder="Pérez" />
                </div>
              </aside>
            </li>
            <li>
              <Paragraph size="medium" align="left" text="Email" />
              <input
                type="gmail"
                align="left"
                placeholder="usuario@email.com"
              />
            </li>
            <li>
              <Paragraph size="medium" align="left" text="Biografía" />
              <textarea
                name="bio"
                placeholder="Cuentanos sobre ti..."
              ></textarea>
            </li>
            <li>
              <Paragraph size="medium" align="left" text="Foto de perfil" />
              <div className={styles.profilePicture}>
                <UserRound
                  size={32}
                  strokeWidth={2}
                  className={styles.profilePicture_icon}
                />
                <span>Cambiar foto</span>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.apariencia}>
          <div className={styles.aparienciaTitle}>
            <Palette strokeWidth={1.5} className={styles.apariencia_Icon} />
            <span>
              <Title level="h4" align="left" text="Apariencia" />
            </span>
          </div>

          <Paragraph size="medium" align="left" text="Tema" />
          <div className={styles.themeGrid}>
            {listAparience.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTheme(item.text.toLowerCase())}
                className={`${styles.themeButton} ${
                  selectedTheme === item.text.toLowerCase()
                    ? styles.themeButtonSelected
                    : styles.themeButtonDefault
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>

          <Paragraph size="h4" align="left" text="Color de Acento" />
          <div className={styles.colorContainer}>
            {listColorAcento.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`${styles.colorButton} ${
                  selectedColor === color ? styles.colorButtonSelected : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </section>

        <section className={styles.contentIdmRgn}>
          <div className={styles.contentIdmRgn_title}>
            <Globe className={styles.contentIdmRgn_title_icon} />
            <Title level="h4" align="left" text="Idioma y Región" />
          </div>

          <div className={styles.contentIdmRgn_select}>
            <div className={styles.contentIdmRgn_crt}>
              <Paragraph size="h4" align="left" text="Idioma" />
              <select
                className={styles.idioma}
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Paragraph size="h4" align="left" text="Zona Horaria" />
              <select
                className={styles.zona_horaria}
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
              >
                {timezones.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className={styles.seguridad}>
          <div className={styles.seguridadTitle}>
            <LockKeyhole
              strokeWidth={2.5}
              className={styles.seguridadTitle_icon}
            />
            <Title level="h4" align="left" text="Privacidad y seguridad" />
          </div>

          <div className={styles.ajustes}>
            {reminders.map((item) => {
              return (
                <div className={styles.ajustesContainer} key={item.id}>
                  <div className={styles.ajustesItem}>
                    <div>
                      <Title level="h4" align="left" className={styles.ajustesTitle}>
                        {item.title}
                      </Title>
                      <Paragraph>{item.paraf}</Paragraph>
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
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.contentExportarDatos}>
          <div className={styles.exportarDatos}>
            <Download className={styles.exportarDatos_icon} />
            <samp><Title level="h4">Exportar Datos</Title></samp>
          </div>
          <Paragraph size="h4" align="left" text="Descarga una copia de tus tareas, eventos y recordatorios" />
          <div className={styles.exportarDatos_container}>
            {exportData.map((item) =>{
              return (
                <div className={styles.exportarDatos_items} key={item.id}>
                    <item.icon className={styles.exportarDatos_info_icon} />
                    <Paragraph className={styles.exportarDatos_info_text}>{item.paraf}</Paragraph>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </MyTemplate>
  );
}

export { SettingsPage };
