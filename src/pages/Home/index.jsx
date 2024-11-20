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
        <Link to="/about" className={`${styles.btn} ${styles.btn_red}`}>
          About me
        </Link>
      </div>
      <figure>
        <img className={styles.img_home} src="/developer-mode.svg" alt="Developer" />
      </figure>
    </section>
  );
}

export default Home;
