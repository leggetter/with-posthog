
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Layout.module.css'

export default function Layout({
    children,
    title = 'This is the default title',
}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    <Link href="#">
                        <a>About</a>
                    </Link>{' '}
                    <Link href="#">
                        <a>Contact</a>
                    </Link>
                </nav>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>{'I am a footer 🦶'}</footer>
        </div>
    )
}