import React from 'react'
import NavSection from './NavSection'


export default function LandingPage() {
  return (
    <div className='landingView'>
            <p className='banner'>Festival offer here!! 20%off on all brands</p>

        <div className='topBar'>
            <div className='header'>
                <p>Free Shopping and return | Join the community</p>
                <img className='logo' src= "https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/crew_clothing_company.png" alt=''/>
                <p>shipping <nbsp/> | order by: +91 9652146503 <nbsp/> |  
                  <a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a>
                </p>
            </div>
        </div>
    
        <NavSection/>
        
        <h2 className='tagLine'> “Shop ’til you drop!”</h2>
        <button className='discoverBtn'>Discover Your products</button>
    </div>
  )
}
