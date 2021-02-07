import styles from '../styles/Home.module.css'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>
          This is the hero text
        </h1>

        <p className={styles.description}>
          This is the main description
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>First grid item &rarr;</h3>
            <a href="/signup">
              <button className={styles.button}>Sign Up</button>
            </a>
            <p className={styles.ctaSubtext}>Grid item description.</p>
          </div>

          <div className={styles.card}>
            <h3>Second grid item &rarr;</h3>
            <a href="/book-a-demo">
              <button className={`${styles.button} ${styles.demoBtn}`}>Book a Demo</button>
            </a>
            <p className={styles.ctaSubtext}>Another Grid item description.</p>
          </div>
          {
            console.log(styles.ctaSubtext)
          }

        </div>
      
    </Layout>
  )
}
