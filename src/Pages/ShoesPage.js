import React, { createContext, useContext, useEffect, useState } from 'react'
import NavSection from '../Components/NavSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import CartPage from './CartPage'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShoesPage() {
// State Manager //
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
const [userProd, setUserProd] = useState({})
const [cart, setCart] = useState([]);

const addToCart = (shoe) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.find((item) => item.id === shoe.id)
        ? prevCart.map((item) =>
            item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...shoe, quantity: 1 }];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
 
const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

console.log(cart)
const handleSelection = (filterType, value) => {
  setSelectedShoes((prevState) => {
    const updatedState = { ...prevState };
    updatedState[filterType] = updatedState[filterType] === value ? null : value;
    return updatedState;
  });
};

const handleSearchQuery = ((e)=>{
  const query = e.target.value;
  setSearchQuery(query)
})


//** API Call from server **//
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

//** Conditional Rendering **//
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

const handleItemsCount = () => filteredShoes.length === 0 ? "No items found" : `Number of Items: ${filteredShoes.length}`;
   
const handleAddToCart = () => {
  toast.success("Item added to cart", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
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

      <p className='mt-3 '>{handleItemsCount()}</p>
      <div className='searchBar'><input type='search' placeholder='Search the product'
        value={searchQuery}
        onChange={handleSearchQuery}/>
        </div>
      <div className='cartHandle'>
      <Link to={{ pathname: '/cartpage', state: { cartItems: cart } }}>
      <img src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png' 
      className='cartIcon'
      alt=''/>
    </Link>
      <p className='cartQuantity'>{totalQuantity}</p>
      </div>
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
        {filteredShoes.length >0 ?(filteredShoes.map((shoe)=>(
            <div key={shoe.id} className='shoeCard'>
            <img className='shoeImg' src={shoe.imageURL} alt=''/>
            <h3>{shoe.brand}</h3>
            <p>{shoe.name}</p>
            <p>{`Gender:${shoe.gender} Category:${shoe.category}`}</p>
            <p>${shoe.price}</p>
            <button className='btn btn-info' onClick={() => {
              addToCart(shoe);
              handleAddToCart()
              }}>
            Add to Cart
            </button>
        </div>
        ))):<h2>Please wait your shoes are on the way</h2>}
      </div>      
    </div>
    <ToastContainer/>
    </div>
  )
}
