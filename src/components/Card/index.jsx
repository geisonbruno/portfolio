import styles from './Card.module.css';

function Card({ image, title, date, tags, description, author, authorRole, authorImage, projectUrl }) {
    return (
        <div className={styles.card}>
            {/* Agrupando a imagem e o conteúdo em uma única div */}
            <div className={styles.cardContentWrapper}>
                {/* Imagem do projeto com link */}
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.cardImageLink}>
                    <div className={styles.cardImage}>
                        <img src={image} alt={title} />
                    </div>
                </a>

                {/* Conteúdo do projeto */}
                <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                        <h3>{title}</h3>
                        <p className={styles.date}>{date}</p>
                    </div>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className={styles.description}>{description}</p>

                    {/* Informações do autor com imagem */}
                    <div className={styles.authorInfo}>
                        <img src={authorImage} alt={author} className={styles.authorImage} />
                        <div>
                            <p>{author}</p>
                            <small>{authorRole}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
