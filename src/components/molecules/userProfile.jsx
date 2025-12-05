import { UserRound } from 'lucide-react'
import styles from './userProfile.module.css'
import { Link } from '../atoms/customLink'

function UserProfile({ currentUser }) {
  return (
    <Link href='/profile' className={styles.profile}>
      
      <div className={styles.profileUser}>
        {currentUser?.avatar ? (
          <img 
            src={currentUser.avatar}
            alt="Avatar"
            className={styles.img}
          />
        ) : (
          <UserRound size="40px" />
        )}
      </div>

      <div className={styles.profileInfo}>
        <small className={styles.ProfileName}>
          {currentUser?.name || "Usuario"}
        </small>

        <small className={styles.ProfileEmail}>
          {currentUser?.email || ""}
        </small>
      </div>

    </Link>
  )
}


export { UserProfile }