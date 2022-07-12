import React from 'react'
import Coinbase from '../../Assets/company/coinbase.svg'
import Dropbox from '../../Assets/company/Dropbox.svg'
import Slack from '../../Assets/company/Slack.svg'
import Spoty from '../../Assets/company/Spoty.svg'
import Webflow from '../../Assets/company/webflow.svg'
import Zoom from '../../Assets/company/zoom.svg'
import './style.css'

const TrustedCompanies = () => {
  return (
    <main className='trusted-container'>
      <div className='trusted-info'>
        Trusted by 4,000+ companies
      </div>
      <section className='trusted-logo'>
        <img src={Coinbase} alt='' />
        <img src={Spoty} alt='' />
        <img src={Slack} alt='' />
        <img src={Dropbox} alt='' />
        <img src={Webflow} alt='' />
        <img src={Zoom} alt='' />
      </section>
    </main>
  )
}

export default TrustedCompanies