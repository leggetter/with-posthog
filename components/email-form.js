import styles from '../styles/EmailForm.module.css'

export default function EmailForm({ buttonText = "Submit", actionUrl }) {
    return (
        <form method="post" action={actionUrl}>
            <input type="email" name="email" required placeholder="email" className={styles.email} />
            <button>{buttonText}</button>
        </form>
    )
}