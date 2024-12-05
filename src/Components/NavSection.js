import React from 'react'

export default function NavSection() {
  return (
    <div className='navSection'>
    <div className='NavBar'>
        <ul>
            <li className='newArrivals'>New Arrivals
            <div className='dropDownMenu'>
            <ul>
                <li>Winter Shirts</li>
                <li>Hoodies</li>
                <li>Head caps</li>
                <li>Customized Sweaters</li>
            </ul>
        </div>
            </li>
            <li className='shoesMenu'>Shoes
            <div className='dropDownMenu'>
            <ul>
                <li>casuals</li>
                <li>Athletic Shoes</li>
                <li>Leather Shoes</li>
                <li>Specialized</li>
            </ul>
        </div>
            </li>
            <li className='forAcces'>Accessories
            <div className='dropDownMenu'>
            <ul>
                <li>Pocket Square</li>
                <li>Tie Clips & Bars</li>
                <li>Collar Pin</li>
                <li>Cuff Links</li>
                <li>Belts</li>
            </ul>
        </div>
            </li>
            <li className='forCollections'>Collections
            <div className='dropDownMenu'>
            <ul>
                <li>Shirts</li>
                <li>Hoodies</li>
                <li>Suits</li>
                <li>Blazzers</li>
                <li>Tradational Wear</li>
            </ul>
        </div>
            </li>
            <li className='forWomen'>Women</li>
        </ul>
    </div>
    
</div>
  )
}
