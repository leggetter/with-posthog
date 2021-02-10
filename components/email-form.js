import styles from '../styles/EmailForm.module.css'

import posthog from '../lib/posthog-client'

import React, { useState } from 'react'

export default function EmailForm({ buttonText = "Submit", actionUrl }) {

    const [email, setEmail] = useState("")

    function handleChange(ev) {
        setEmail(ev.target.value)
    }

    function handleSubmit() {
        posthog.identify(email)
    }

    return (
        <form method="post" action={actionUrl} onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="email" className={styles.email} onChange={handleChange} />
            <button>{buttonText}</button>
        </form>
    )
}