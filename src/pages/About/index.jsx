import styles from './About.module.css';
import avatar from './images/my.png';
import java from './images/icon-java.svg';
import spring from './images/icon-spring.svg';
import fastlane from './images/icon-fastlane.svg';
import kotlin from './images/icon-kotlin.svg';
import linux from './images/icon-linux.svg';
import git from './images/icon-git.svg';
import maven from './images/icon-maven.svg';
import firebase from './images/icon-firebase.svg';
import googleplay from './images/icon-googleplay.svg';
import androidstudio from './images/icon-androidstudio.svg';
import windows from './images/icon-windows.svg';
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import react from './images/icon-react.svg';
import mysql from './images/icon-mysql.svg';
import build from './images/icon-build.svg';


function About() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>About</h2>
                    <p>I'm <span>Geison Bruno</span> <br />
                        <strong>Developer</strong> </p>

                    <p>Here you will found some of my personal projects, but that doesnt means this is reflect all my skills, most of projects that i'm currently working are closed source, So if you need to know something, feel free to ask in my Socials.</p>

                    <p>I have been working professionally for 1 year and 5 months as a Developer, acting as a Back-end in mobile and web applications.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Icone do html" title='HTML' />
                    <img src={css} alt="Icone do css" title='CSS'/>
                    <img src={react} alt="Icone do react" title='React' />
                    <img src={mysql} alt="Icone do mysql" title='MySQL'/>
                    <img src={git} alt="Icone do git" title='Git'/>
                    <img src={linux} alt="Icone do linux" title='Linux'/>
                    <img src={windows} alt="Icone do windows" title='Windows'/>
                    <img src={androidstudio} alt="Icone do androidstudio" title='Android Studio'/>
                    <img src={googleplay} alt="Icone do googleplay" title='Google Play'/>
                    <img src={firebase} alt="Icone do firebase" title='Firebase'/>
                    <img src={maven} alt="Icone do maven" title='Maven'/>
                    <img src={java} alt="Icone do java" title='Java'/>
                    <img src={kotlin} alt="Icone do kotlin" title='Kotlin'/>
                    <img src={spring} alt="Icone do spring" title='Spring boot'/>
                    <img src={fastlane} alt="Icone do fastlane" title='Fastlane'/>
                    <img src={build} alt="Icone do build" title='Build gradle'/>
                </div>
            </div>
        </section>
    )
}

export default About;