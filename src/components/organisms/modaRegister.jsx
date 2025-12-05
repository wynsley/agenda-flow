import { useState } from 'react'
import { Button } from '../atoms/button'
import { Title } from '../atoms/titles'
import styles from './modalRegister.module.css'
import { FormItem } from '../molecules/formItem'
import { AuthService } from '../../services/authService'

function Register({ setModalRegisterOpen, onRegisterSuccess }) {
  const [isClosee, setIsClosse] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  
  const hadleClosed = () => {
    setIsClosse(true)
    setTimeout(() => {
      setModalRegisterOpen(false)
    }, 400)
  }

  const handleBackdropClick = (e) => {
    if(e.target === e.currentTarget){
      hadleClosed()
    }
  } 

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos los campos son requeridos')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    try {
      const user = AuthService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })

      if (onRegisterSuccess) onRegisterSuccess(user)
      hadleClosed()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formFields = [
    {
      text: 'Nombre',
      htmlFor: 'name',
      type: 'text',
      name: 'name',
      placeholder: 'Ingresa tu nombre',
      value: formData.name,
      onChange: handleChange
    },
    {
      text: 'Correo',
      htmlFor: 'email',
      type: 'email',
      name: 'email',
      placeholder: 'tucorreo@gmail.com',
      value: formData.email,
      onChange: handleChange
    },
    {
      text: 'Contraseña',
      htmlFor: 'password',
      type: 'password',
      name: 'password',
      placeholder: 'Contraseña',
      value: formData.password,
      onChange: handleChange
    },
    {
      text: 'Repetir Contraseña',
      htmlFor: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Repite tu contraseña',
      value: formData.confirmPassword,
      onChange: handleChange
    }
  ]

  return (
    <div onClick={handleBackdropClick} 
      className={`${styles.backdrop} ${isClosee ? styles.closing: ''}`}
    >
      <form 
        onSubmit={handleSubmit}
        onClick={handleModalClick}
        className={`${styles.form} ${isClosee ? styles.closing: ''}`}
      >
        <Title
          text={'Registrate'}
          level='h4'
          align='center'
        />

        {error && (
          <div style={{
            padding: '0.75rem',
            backgroundColor: '#fee2e2',
            color: '#991b1b',
            borderRadius: '6px',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <FormItem
          formFields={formFields}
          inputVariant="primary"
          inputAlign="left"
          inputSize='small'
        />
        <Button
          className={styles.btnRegister}
          text={'Registrarse'}
          variant='secondary'
          type='submit'
        />
      </form>
    </div>
  )
}

export { Register }