import { Input } from '../atoms/input'
import { Label } from '../atoms/label'
import { Select } from '../atoms/select'
import styles from './formItem.module.css'

function FormItem({ 
  formFields,
  inputVariant = 'secondary',
  inputAlign = 'left',
  inputSize = 'large',
  selectVariant = 'secondary',
  selectSize = 'small'
  }) {
  return (
    <>
    {
      formFields.map((item, i) => {
        return (
          <div key={i} className={styles.formItem}>
            <Label
              align='left'
              size='small'
              text={item.text}
              htmlFor={item.htmlFor}
            />
            {item.type === 'select' ?(
              <Select
                size={selectSize}
                variant={selectVariant}
                name={item.name}
                value={item.value}
                options={item.options}
                onChange={item.onChange}
              />
            ):(
              <Input
                variant={inputVariant}
                align={inputAlign}
                size={inputSize}
                type={item.type}
                name={item.name}
                value={item.value}  
                placeholder={item.placeholder}
                onChange={item.onChange} 
              />
            )}
          </div>
        )
      })
    }
    </>
  )
}

export { FormItem }