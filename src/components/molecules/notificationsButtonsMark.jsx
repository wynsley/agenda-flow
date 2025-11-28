import styles from './notificationsBUttonsMark.module.css'

function NotifyButtons (){
    return(
        <div className={styles.containerMarcar}>
            <button className={styles.marcar}>Marcar todas como leidas</button>  
            <button className={styles.marcar}>Borrar todas</button>  
        </div>
    )
}

export {NotifyButtons}