import PostHog from 'posthog-node'

const posthog = new PostHog(
    process.env.NEXT_PUBLIC_POSTHOG_TOKEN,
    { host: process.env.NEXT_PUBLIC_POSTHOG_API_HOST }
)

export default posthog