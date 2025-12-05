import { ProfileAvatar } from '../../molecules/profile/profieAvatar'
import styles from './profileHeader.module.css'

function ProfileHeader({ 
  user, 
  onAvatarChange, 
  isEditing, 
  onEdit 
}) {
  const memberSince = user?.memberSince 
    ? new Date(user.memberSince).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    : 'Enero 2024'

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Mi Perfil</h1>
          <p className={styles.subtitle}>Administra tu información personal y preferencias</p>
        </div>
        {!isEditing && (
          <button onClick={onEdit} className={styles.btnEdit}>
            Editar Perfil
          </button>
        )}
      </div>

      <div className={styles.profileSection}>
        <ProfileAvatar 
          avatar={user?.avatar} 
          onAvatarChange={onAvatarChange} 
        />
        
        <div className={styles.basicInfo}>
          <h2 className={styles.userName}>{user?.name || 'Usuario'}</h2>
          <p className={styles.userEmail}>{user?.email || 'correo@ejemplo.com'}</p>
          <p className={styles.memberSince}>Miembro desde {memberSince}</p>
        </div>
      </div>
    </>
  )
}

export { ProfileHeader }