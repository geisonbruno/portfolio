import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Hello! I'm<br />
          <span>Geison Bruno</span> <br />
          Developer Java, Kotlin
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/about" className={`${styles.btn} ${styles.btn_red}`}>
            About me
          </Link>
          <Link to="/projects" className={`${styles.btn} ${styles.btn_work}`}>
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
