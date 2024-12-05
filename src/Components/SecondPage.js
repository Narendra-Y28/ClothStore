import React from 'react'
import NavSection from './NavSection'

export default function SecondPage() {
  return (
    <>
        <div className='itemsPage'>
       
           <div className='titlesSection'>
            <h2 className='subTitle'>EVERY LAST DETAIL</h2>
            <h1 className='title'>Compose your own style</h1>
            </div>
            <div className='itemCards'>
                <div className='card'>
                    <img className ="imgCard" src='https://dappered.com/wp-content/uploads/2022/02/Taylor-Stitch-Loden-Suede-Chukka-header-1500-v2-1320x740.jpg' alt=''/>
                    <h3 className='cardTitle'>SHOES</h3>
                   
                </div>
                <div className='card'>
                    <img className ="imgCard" src='https://i.pinimg.com/originals/57/7e/9d/577e9d66f15adfa1055839e06b73d43d.jpg' alt=''/>
                    <h3 className='cardTitle'>CLOTHING</h3>
                   
                </div>
                <div className='card'>
                    <img className ="imgCard" src='https://www.thefashionisto.com/wp-content/uploads/2015/12/MAC-Jeans-2015-Fall-Winter-002-450x636.jpg' alt=''/>
                    <h3 className='cardTitle'>ACCESSORIES</h3>
                   
                </div>
            </div>
        </div>
    </>
  )
}
