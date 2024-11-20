import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <Link to="/">
        <span>geisonBruno.dev</span>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
    </header>
  );
}

export default Header;