import React from 'react'
import './Trusted.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Trusted = () => {
  return (
    <div className='container'>
    <div className="container-2">
    <div className="innner">
        <h3>Trusted by 1000+ Companies</h3>
    </div>
    <div className="inner-brands">
        <div className="brand1"><GoogleIcon /></div>
        <div className="brand1"><FacebookIcon /></div>
        <div className="brand1"><GitHubIcon /></div>
        <div className="brand1"><InstagramIcon /></div>
        <div className="brand1"><LinkedInIcon /></div>
    </div>
    </div>
    </div>
  )
}

export default Trusted