import styles from '../styles/PageHero.module.css'

export default function PageHero({title, description}) {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>
                {title}
            </h1>

            {description && <p className={styles.description}>
                {description}
            </p>}
        </div>
    )
}