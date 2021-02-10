import Layout from '../components/layout'
import PageHero from '../components/page-hero'
import EmailForm from '../components/email-form'

export default function SignUp() {
  return (
    <Layout title="Sign Up">
      <PageHero title="👉 Sign Up" description="Here's why you should sign up..." />

      <EmailForm buttonText="Sign Up" actionUrl="/api/signup" />
    </Layout>
  )
}