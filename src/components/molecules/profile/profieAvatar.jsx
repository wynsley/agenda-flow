import { Camera, UserRound } from 'lucide-react'
import styles from './profileAvatar.module.css'

function ProfileAvatar({ avatar, onAvatarChange }) {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar}>
        {avatar ? (
          <img src={avatar} alt="Avatar" className={styles.avatarImg} />
        ) : (
          <UserRound size={60} color="#9ca3af" />
        )}
      </div>
      <label className={styles.avatarButton}>
        <Camera size={18} color="white" />
        <input
          type="file"
          accept="image/*"
          onChange={onAvatarChange}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  )
}

export { ProfileAvatar }