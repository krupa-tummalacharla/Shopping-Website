import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Men from './components/Men';
import Women from './components/Women';
import Jewelery from './components/Jewelery';
import DetailsPage from './components/DetailsPage';
import WishList from './components/WishList';
import AddToCart from './components/AddToCart';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/men' element={<Men/>}></Route>
      <Route exact path='/women' element={<Women/>}></Route>
      <Route exact path='/jewlery' element={<Jewelery/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/details' element={<DetailsPage/>}></Route>
      <Route exact path='/wishlist' element={<WishList/>}></Route>
      <Route exact path='/addtocart' element={<AddToCart/>}></Route>
      <Route exact path='/checkout' element={<CheckOut/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
