import './App.css';
import BuyNowPage from './BuyNowPage';
import CarouselPage from './Components/CarouselPage';
import FooterPage from './Components/FooterPage';
import LandingPage from './Components/LandingPage';
import SecondPage from './Components/SecondPage';
import AccessoriesPage from './Pages/AccessoriesPage';
import CartPage from './Pages/CartPage';
import ClothesPage from './Pages/ClothesPage';
import ShoesPage from './Pages/ShoesPage';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Success from './Pages/Success';
import Cancle from './Pages/Cancle';

function App() {
  return (
    <Router>
      
    <div className="App">
    <Routes>
      <Route path='/' element ={<LandingPage/>}/>
      <Route path='/shoes' element ={<ShoesPage/>}/>
      <Route path='/clothes' element ={<ClothesPage/>}/>
      <Route path='/accessories' element ={<AccessoriesPage/>}/>
      <Route path='/cartpage' element ={<CartPage/>}/>
      <Route path='/buypage' element ={<BuyNowPage/>}/>
      <Route path='/success' element ={<Success/>}/>
      <Route path='/cancle' element ={<Cancle/>}/>
    </Routes> 
    </div>
     
    </Router>
  );
}

export default App;
