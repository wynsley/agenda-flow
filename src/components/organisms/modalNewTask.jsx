import { useState } from 'react'
import { Title } from '../atoms/titles'
import styles from './modalNewTask.module.css'
import { Button } from '../atoms/button'
import { FormItem } from '../molecules/formItem'

function ModalNewTask({setNewTaskOpen,addTask }) {

	const [isClosing, setIsClosing] = useState(false)
	const [data, setData] = useState({
      title : '',
      description : '',
      hour : '',
      priority : '',
      category : ''
    })
	
	const formFields = [
		{
			text: 'Título',
      htmlFor: 'title',
      type: 'text',
      name:'title',
      value: data.title,
			onChange: (e) => setData({...data, title: e.target.value})
		},
		{
			text: 'Descripción',
      htmlFor: 'description',
      type: 'text',
      name:'description',
      value: data.description,
			onChange: (e) => setData({...data, description: e.target.value})
		},
		{
			text: 'Hora',
      htmlFor: 'hour',
      type: 'time',
      name:'hour',
      value: data.hour,
			onChange: (e) => setData({...data, hour: e.target.value})
		},
		{
			text: 'Prioridad',
      htmlFor: 'priority',
      type: 'select',
      name:'priority',
      value: data.priority,
			onChange: (e) => setData({...data, priority: e.target.value}),
			options :[
				{value: 'Media', label : 'Media'},
				{value: 'Baja', label : 'Baja'},
				{value: 'Media', label : 'Media'},
				{value: 'Alta', label : 'Alta'},
			]
		},
		{
			text: 'Categoría',
      htmlFor: 'category',
      type: 'select',
      name:'category',
      value: data.category,
			onChange: (e) => setData({...data, category: e.target.value}),
			options :[
				{value: '0', label : 'Tu categoría'},
				{value: 'Trabajo', label : 'Trabajo'},
				{value: 'Personal', label : 'Personal'},
				{value: 'Reuniones', label : 'Reuniones'},
				{value: 'Clientes', label : 'Clientes'},
			]
		},
	] 

	const handleClosed = (e) =>{
		e.preventDefault()
		setIsClosing(true)
		setTimeout(()=>{
			setNewTaskOpen(false)
		}, 400)
	}

const handleSubmit = (e) => {
  e.preventDefault();

  if (!data.title || !data.description || !data.hour || !data.priority || data.category === '0') {
    alert('Por favor completa todos los campos');
    return;
  }

  const newTask = {
    title: data.title,
    description: data.description,
    hour: data.hour,
    priority: data.priority,
    category: data.category
  };

  addTask(newTask); 
  handleClosed(e);
};


	const handleBgClick = (e) => {
  if (e.target === e.currentTarget) {
    handleClosed(e);
  }
};


	const handleClickModal = (e) =>{
		e.stopPropagation()
	}
	return (
		<div
			onClick={handleBgClick}
			className={`${styles.newTask} ${isClosing ? styles.closing : ''}`}
			>
			<form 
				className={`${styles.form} ${isClosing ? styles.closing : ''}`}
				onSubmit={handleSubmit}
				onClick={handleClickModal}
			>
				<Title
					level='h3'
					align='center'
					text={'Nueva Tarea'}
				/>
				<FormItem formFields={formFields}
					inputSize='small'
				/>
				<Button
					variant='secondary'
					text={'Crear'}
					type='submit'
					className={styles.btnTsk}
				/>
			</form>
		</div>
	)
}

export { ModalNewTask }