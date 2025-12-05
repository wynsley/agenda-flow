import { useState } from 'react'
import { Title } from '../atoms/titles'
import styles from './modalLogin.module.css'
import { Paragraph } from '../atoms/paragraph'
import { Link } from '../atoms/customLink'
import { Button } from '../atoms/button'
import { FormItem } from '../molecules/formItem'
import { AuthService } from '../../services/authService'

function Login({ setModalIsOpen, setModalRegisterOpen, onLoginSuccess }) {
  const [isClosing, setIsClosing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalIsOpen(false)
    }, 400)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const handleGoToRegister = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalIsOpen(false)
      setModalRegisterOpen(true)
    }, 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.email || !formData.password) {
      setError('Todos los campos son requeridos')
      return
    }

    try {
      const user = AuthService.login(formData.email, formData.password)
      if (onLoginSuccess) onLoginSuccess(user)
      handleClose()
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
      text: 'Usuario',
      htmlFor: 'email',
      type: 'email',
      name: 'email',
      value: formData.email,
      onChange: handleChange
    },
    {
      text: 'Contraseña',
      htmlFor: 'password',
      type: 'password',
      name: 'password',
      value: formData.password,
      onChange: handleChange
    }
  ]

  return (
    <>
      <div
        className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div
          className={`${styles.containerLogin} ${isClosing ? styles.closing : ''}`}
          onClick={handleModalClick}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.containerTitles}>
              <Title level='h3' variant='secondary' align='center'>
                Login
              </Title>
              <Paragraph align='center' size='small'>
                Ingresa para continuar con tu sesión segura
              </Paragraph>
            </div>

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
            />
            <Button
              type='submit'
              variant='secondary'
              text={'Enviar'}
            />
            <div className={styles.containerLinks}>
              <Link href='#' text={'olvide mi contraseña'} className={styles.link}/>
              <Link onClick={handleGoToRegister} text={'No tengo cuenta'} className={styles.link}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { Login }