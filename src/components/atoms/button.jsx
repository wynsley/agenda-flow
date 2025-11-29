import styles from './button.module.css'
import PropTypes from 'prop-types'

function Button({ text, onClick, className = '', type,disabled, variant = 'default' }) {

  const variantCla = styles[variant] || styles.default
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${variantCla} ${className}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>

  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled : PropTypes.bool
};
export { Button }

