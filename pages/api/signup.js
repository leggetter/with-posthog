// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import posthog from '../../lib/posthog-server'

export default (req, res) => {
  if(req.method === 'POST') {
    posthog.capture({
      distinctId: req.body.email,
      event: 'signup',
      properties: {
        email: req.body.email
      }
    })
    res.redirect('/welcome')
  }  
}
