import { UserRound, Mail, Phone, MapPin, Briefcase, Save, X } from 'lucide-react'
import { ProfileField } from '../../molecules/profile/profileField'
import styles from './PersonalInfoSection.module.css'

function PersonalInfoSection({ 
  user, 
  isEditing, 
  editData, 
  onEditDataChange, 
  onSave, 
  onCancel 
}) {
  return (
    <div className={styles.personalInfo}>
      <h3 className={styles.sectionTitle}>Información Personal</h3>
      
      <div className={styles.grid}>
        <ProfileField
          label="Nombre completo"
          value={user?.name}
          icon={UserRound}
          isEditing={isEditing}
          editValue={editData.name}
          onChange={(e) => onEditDataChange({ ...editData, name: e.target.value })}
        />

        <div className={styles.field}>
          <label className={styles.label}>Correo electrónico</label>
          <div className={styles.value}>
            <Mail size={18} color="#9ca3af" />
            {user?.email || 'No especificado'}
          </div>
        </div>

        <ProfileField
          label="Teléfono"
          value={user?.phone}
          icon={Phone}
          isEditing={isEditing}
          editValue={editData.phone}
          onChange={(e) => onEditDataChange({ ...editData, phone: e.target.value })}
          placeholder="Ingresa tu teléfono"
          type="tel"
        />

        <ProfileField
          label="Ubicación"
          value={user?.location}
          icon={MapPin}
          isEditing={isEditing}
          editValue={editData.location}
          onChange={(e) => onEditDataChange({ ...editData, location: e.target.value })}
          placeholder="Ciudad, País"
        />

        <ProfileField
          label="Empresa"
          value={user?.company}
          icon={Briefcase}
          isEditing={isEditing}
          editValue={editData.company}
          onChange={(e) => onEditDataChange({ ...editData, company: e.target.value })}
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className={styles.bioSection}>
        <label className={styles.label}>Biografía</label>
        {isEditing ? (
          <textarea
            value={editData.bio}
            onChange={(e) => onEditDataChange({ ...editData, bio: e.target.value })}
            placeholder="Cuéntanos sobre ti..."
            rows={4}
            className={styles.textarea}
          />
        ) : (
          <p className={styles.bioText}>
            {user?.bio || 'No hay biografía'}
          </p>
        )}
      </div>

      {isEditing && (
        <div className={styles.editButtons}>
          <button onClick={onSave} className={styles.btnSave}>
            <Save size={18} />
            Guardar Cambios
          </button>
          <button onClick={onCancel} className={styles.btnCancel}>
            <X size={18} />
            Cancelar
          </button>
        </div>
      )}
    </div>
  )
}

export { PersonalInfoSection }