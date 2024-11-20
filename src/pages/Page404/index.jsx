
import styles from './Page404.module.css';

function Page404() {
  return (
    <>
         <div className={styles.textos}> 
        <h2 className={styles.titulo2}>Not found</h2>
            <span className={styles.texto_grande}>404</span> <br />
            <strong className={styles.texto_vermelho}>Page not found</strong>
        </div>
    </>
  )
}

export default Page404;