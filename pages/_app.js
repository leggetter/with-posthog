import '../styles/globals.css'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import posthog from '../lib/posthog'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if(typeof window !== 'undefined') {
        posthog.capture('$pageview')
      }
    };

    // first load
    handleRouteChange()

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />
}

export default MyApp
