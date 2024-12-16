import React, { useEffect, useState } from 'react'
import NavSection from '../Components/NavSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'


export default function ShoesPage() {
  const[shoes,setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null)
  const [selectedShoes,setSelectedShoes] = useState({
    brand: null,
    gender: null,
    category: null,
    priceRange: null,
  })

const handleSelection = (filterType,value)=>{
  setSelectedShoes((prevState)=>{
    const updateState = {...prevState};
    if (prevState[filterType]=== value){
      updateState[filterType] = null;    
    }else{
      updateState[filterType] = value;
    }
    return updateState
  })
}

const handleSearchQuery = ((e)=>{
  const query = e.target.value;
  setSearchQuery(query)
})

console.log(searchQuery)
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch ("http://localhost:2000/api/shoes")

        if(!response.ok){
          throw new Error("Network response was not ok");
        }

        const results = await response.json();
        setShoes(results)
        setFilteredShoes(results)
        console.log(results)
        
      }
      catch (error){
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    };
    fetchData();
  },[])

useEffect(()=>{
  const filtered = shoes.filter((shoe) =>{
     const matchBrand = selectedShoes.brand ? shoe.brand === selectedShoes.brand : true;
      const matchGender = selectedShoes.gender ? shoe.gender === selectedShoes.gender : true;
      const matchCategory =  selectedShoes.category ? shoe.category === selectedShoes.category : true
      const matchPrice =  selectedShoes.priceRange ?
        (selectedShoes.priceRange === "Under $100" && shoe.price <100) ||
        (selectedShoes.priceRange === "Under $150" && shoe.price <150) ||
        (selectedShoes.priceRange === "Under $200" && shoe.price <200)
        : true;
        const matchQuery = searchQuery ? 
        shoe.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shoe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shoe.gender.toLowerCase().includes(searchQuery.toLowerCase()) : true;

      return(matchBrand && matchGender && matchCategory && matchPrice && matchQuery)
  })
  setFilteredShoes(filtered)
  
},[selectedShoes, shoes,searchQuery])

  const toggleFilterMenu = (filter) =>{
    setActiveFilter ((prevFilter) => (prevFilter === filter ? null: filter))
  }


  return (
    <div className='shoesPage'>
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
        <div className='filterBar'>
          <div className='optionsList'>
            <ul>
              <li>
              <FontAwesomeIcon icon={faArrowDownShortWide} />
                FILTER BY:</li>
              <li onClick={()=> toggleFilterMenu('brand')}>BRAND
              <FontAwesomeIcon icon={faCaretDown} />
                {activeFilter === 'brand' && (
                  <div className='filterMenu'>
                  <ul>
                    <li onClick={()=> handleSelection('brand','NIKE')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />NIKE</li>
                    <li onClick={()=> handleSelection('brand','HUSHPUPPIES')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />HUSHPUPPIES</li>
                    <li onClick={()=> handleSelection('brand','ADIDAS')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />ADIDAS</li>
                    <li onClick={()=> handleSelection('brand','Vans')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />VANS</li>
                  </ul>
                </div>
                )}
              </li>
              <li onClick={()=> toggleFilterMenu("gender")}>GENDER
              <FontAwesomeIcon icon={faCaretDown} />
                {activeFilter === "gender" && (
                  <div className='filterMenu'>
                  <ul>
                    <li onClick={()=> handleSelection('gender','MEN')}> <FontAwesomeIcon className="radioBtn"icon={faCircleDot} />MENS</li>
                    <li onClick={()=> handleSelection('gender','WOMEN')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />WOMENS</li>
                    <li onClick={()=> handleSelection('gender','KIDS')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />KIDS</li>
                  </ul>
                </div>
                )}
              </li>
              <li onClick={()=> toggleFilterMenu("priceRange")}>PRICE RANGE
              <FontAwesomeIcon icon={faCaretDown} />
                {activeFilter === "priceRange" && (
                  <div className='filterMenu'>
                  <ul>
                    <li onClick={()=> handleSelection('priceRange','Under $100')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />Under $ 100</li>
                    <li onClick={()=> handleSelection('priceRange','Under $150')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />Under $ 150</li>
                    <li onClick={()=> handleSelection('priceRange','Under $200')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />Under $ 200</li>
                  </ul>
                </div>
                )}
              </li>
              <li onClick={()=> toggleFilterMenu("category")}>CATEGORY
              <FontAwesomeIcon icon={faCaretDown} />
                {activeFilter === "category" && (
                  <div className='filterMenu'>
                  <ul>
                    <li onClick={()=> handleSelection('category','RUNNING')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />RUNNING</li>
                    <li onClick={()=> handleSelection('category','FOOTBALL')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />FOOTBALL</li>
                    <li onClick={()=> handleSelection('category','CASUAL')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />CASUAL</li>
                    <li onClick={()=> handleSelection('category','FORMAL')}> <FontAwesomeIcon className="radioBtn" icon={faCircleDot} />FORMAL</li>
                  </ul>
                </div>
                )}
              </li>
            </ul>
            </div>
            <div className='searchBar'><input type='search' placeholder='Search the product'
              value={searchQuery}
              onChange={handleSearchQuery}
            /></div>
            </div>
        <div className='productsList'>
          <div className='inrtoBox'>
            <h2 className='title mt-2'>LACE-UPS</h2>
            <p className='m-2'>Lace-Ups are a variety among men's classic shoes  - for your
              working days - and your off days - for your weekends. 100% made with love in India.
            </p>
            <img  className= "mt-5 "src='https://th.bing.com/th/id/OIP.GQxGT6Cd7DG5x5URKmdBdAAAAA?pid=ImgDet&w=159&h=159&c=7' alt=''/>
          </div>
          <div className='shoeCards'>
            {filteredShoes.map((shoe)=>(
          <div key={shoe.id} className='shoeCard'>
              <img className='shoeImg' src={shoe.imageURL} alt=''/>
              <h3>{shoe.brand}</h3>
              <p>{shoe.name}</p>
              <p>{`Gender:${shoe.gender} Category:${shoe.category}`}</p>
              <p>${shoe.price}</p>
          </div>
            ))}
          </div>
        </div>
        </div>
  )
}
