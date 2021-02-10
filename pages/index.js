import styles from '../styles/Home.module.css'

import { React } from 'react'
import Link from 'next/link'

import Layout from '../components/layout'

import posthog from '../lib/posthog-client'
import PageHero from '../components/page-hero'

export default function Home() {
  return (
    <Layout title="Welcome 👋">
      <PageHero title="this is the hero text 🦸‍♀️" description="this is the main description 📖" />

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>First grid item &rarr;</h3>
          <Link href="/signup">
            <a onClick={() => {
              posthog.capture('signup-button-click')
            }}>
              <button className={styles.button}>Sign Up</button>
            </a>
          </Link>
          <p className={styles.ctaSubtext}>Grid item description.</p>
        </div>

        <div className={styles.card}>
          <h3>Second grid item &rarr;</h3>
          <Link href="/book-a-demo">
          <a onClick={() => {
              posthog.capture('book-demo-button-click')
            }}>
              <button className={`${styles.button} ${styles.demoBtn}`}>Book a Demo</button>
            </a>
          </Link>
          <p className={styles.ctaSubtext}>Another Grid item description.</p>
        </div>

      </div>
      
    </Layout>
  )
}
