import posthog from 'posthog-js'

if(typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN, { api_host: process.env.POSTHOG_API_HOST})
}

export default posthog