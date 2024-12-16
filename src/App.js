import './App.css';
import CarouselPage from './Components/CarouselPage';
import FooterPage from './Components/FooterPage';
import LandingPage from './Components/LandingPage';
import SecondPage from './Components/SecondPage';
import AccessoriesPage from './Pages/AccessoriesPage';
import ClothesPage from './Pages/ClothesPage';
import ShoesPage from './Pages/ShoesPage';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
    <div className="App">
    <Routes>
      <Route path='/' element ={<LandingPage/>}/>
      <Route path='/shoes' element ={<ShoesPage/>}/>
      <Route path='/clothes' element ={<ClothesPage/>}/>
      <Route path='/accessories' element ={<AccessoriesPage/>}/>
    </Routes> 
    </div>
     
    </Router>
  );
}

export default App;
