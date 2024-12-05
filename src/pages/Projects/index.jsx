import Card from '../../components/Card';
import styles from './Projects.module.css';
import projectSoftphoneImage from './images/projectSoftphone.png';
import myImage from './images/my.png';

const projectData = [
    {
        image: projectSoftphoneImage,
        title: 'Softphone white-label',
        date: '18 de set. de 2023',
        tags: ['Kotlin', 'Firebase', 'Fastlane', 'Flavors'],
        description:
            'Este projeto é um App de comunicação VoIP, projetado para oferecer chamadas de voz e vídeo, utilizando tecnologia VoIP. No qual trabalhei imersivamente, desenvolvendo funcionalidades, melhorando a performance e a experiência do usuário.',
        author: 'Geison Bruno',
        authorRole: 'Desenvolvedor de Software',
        authorImage: myImage,
         projectUrl: 'https://play.google.com/store/apps/dev?id=5756200202892972493&hl=pt_BR'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Titulo do projeto',
        date: '17 de ago. de 2022',
        tags: ['Java'],
        description:
            'Descrição projeto.',
        author: 'Geison Bruno',
        authorRole: 'Desenvolvedora de Software',
        authorImage: myImage,
         projectUrl: 'https://exemplo.com/projeto'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Titulo do projeto',
        date: '17 de ago. de 2022',
        tags: ['Java'],
        description:
            'Descrição projeto.',
        author: 'Geison Bruno',
        authorRole: 'Desenvolvedora de Software',
        authorImage: myImage,
         projectUrl: 'https://exemplo.com/projeto'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Titulo do projeto',
        date: '17 de ago. de 2022',
        tags: ['Java'],
        description:
            'Descrição projeto.',
        author: 'Geison Bruno',
        authorRole: 'Desenvolvedora de Software',
        authorImage: myImage,
         projectUrl: 'https://exemplo.com/projeto'
    },
];

function Projects() {
    return (
        <div className={styles.projectsPage}>
            <h2 className={styles.pageTitle}>Latest Projects</h2>
            <div className={styles.projectsList}>
                {projectData.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
