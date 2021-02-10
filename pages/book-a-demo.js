import Layout from '../components/layout'
import PageHero from '../components/page-hero'
import EmailForm from '../components/email-form'

export default function BookADemo() {
  return (
    <Layout title="Sign Up">
        <PageHero title="🎟 Book a Demo" description="Here's what you'll learn in the demo 🎓" />

        <EmailForm buttonText="Book a Demo" actionUrl="/api/book-demo" />
    </Layout>
  )
}