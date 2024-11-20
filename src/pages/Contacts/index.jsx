
import styles from './Contacts.module.css';
import { ImMail } from "react-icons/im";
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from 'react-icons/bs';

function Contacts() {
  return (
    <>
      <section className={styles.contacts}>
        <h2>Contacts</h2>
        <h3>Get in touch</h3>
        <p>So we can talk more about</p>

        <div className={styles.icones}>
          <a href="mailto: geisonbruno0@gmail.com" target='_blank' rel='noopener noreferrer'>
            <ImMail className={styles.icone} />
          </a>

          <a href="+5551991777814" target='_blank' rel='noopener noreferrer'>
            <FaPhoneAlt className={styles.icone} />
          </a>

          <a href="https://www.linkedin.com/in/geison-bruno-ab4079224/" target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin className={styles.icone} />
          </a>

          <a href="https://github.com/geisonbruno" target='_blank' rel='noopener noreferrer'>
            <BsGithub className={styles.icone} />
          </a>
        </div>

      </section>
    </>
  )
}

export default Contacts;