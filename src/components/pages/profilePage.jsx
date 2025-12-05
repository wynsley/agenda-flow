import { useState } from 'react'
import { MyTemplate } from '../templates/myTemplate'
import { AlertMessage } from '../atoms/alert'
import { ProfileHeader } from '../organisms/profile/profileHeader'
import { PersonalInfoSection } from '../organisms/profile/personalInfoSection'
import { SecuritySection } from '../organisms/profile/securitySection'
import { StatsSection } from '../organisms/profile/statesSection'
import { LogoutSection } from '../organisms/profile/logoutSection'
import { PasswordModal } from '../organisms/profile/modalPassword'
import { AuthService } from '../../services/authService'
import styles from './ProfilePage.module.css'

function ProfilePage({ currentUser, onUpdateUser, onLogout }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    location: currentUser?.location || '',
    company: currentUser?.company || '',
    bio: currentUser?.bio || ''
  })
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Cargar tareas y eventos del localStorage
  const tasks = JSON.parse(localStorage.getItem('userTasks') || '[]')
  const events = JSON.parse(localStorage.getItem('userEvents') || '[]')
  
  const completedTasks = tasks.filter(t => t.completed).length
  const totalEvents = events.length
  const activeReminders = events.filter(e => new Date(e.fecha) >= new Date()).length

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phone: currentUser?.phone || '',
      location: currentUser?.location || '',
      company: currentUser?.company || '',
      bio: currentUser?.bio || ''
    })
  }

  const handleSave = () => {
    try {
      const updatedUser = AuthService.updateUser(editData)
      onUpdateUser(updatedUser)
      setIsEditing(false)
      setSuccess('Perfil actualizado correctamente')
      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        try {
          const updatedUser = AuthService.updateUser({ avatar: reader.result })
          onUpdateUser(updatedUser)
          setSuccess('Foto actualizada correctamente')
          setTimeout(() => setSuccess(''), 3000)
        } catch (err) {
          setError(err.message)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePasswordChange = () => {
    setError('')
    setSuccess('')

    if (!passwordData.oldPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError('Todos los campos son requeridos')
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (passwordData.newPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    try {
      AuthService.changePassword(passwordData.oldPassword, passwordData.newPassword)
      setShowPasswordModal(false)
      setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' })
      setSuccess('Contraseña cambiada correctamente')
      setTimeout(() => setSuccess(''), 3000)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false)
    setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' })
    setError('')
  }

  return (
    <MyTemplate className={styles.profile}>
      <div className={styles.container}>
        <AlertMessage message={success} type="success" />
        <AlertMessage message={error} type="error" />

        <div className={styles.card}>
          <ProfileHeader
            user={currentUser}
            onAvatarChange={handleAvatarChange}
            isEditing={isEditing}
            onEdit={handleEdit}
          />

          <PersonalInfoSection
            user={currentUser}
            isEditing={isEditing}
            editData={editData}
            onEditDataChange={setEditData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </div>

        <SecuritySection onChangePassword={() => setShowPasswordModal(true)} />

        <StatsSection
          completedTasks={completedTasks}
          totalEvents={totalEvents}
          activeReminders={activeReminders}
        />

        <LogoutSection onLogout={onLogout} />

        <PasswordModal
          isOpen={showPasswordModal}
          passwordData={passwordData}
          onPasswordDataChange={setPasswordData}
          onSubmit={handlePasswordChange}
          onClose={handleClosePasswordModal}
          error={error}
        />
      </div>
    </MyTemplate>
  )
}

export { ProfilePage }