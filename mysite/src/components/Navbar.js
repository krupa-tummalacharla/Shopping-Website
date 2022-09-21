import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { logoutReducer } from '../reduxstate/reducers/loginReducer';
import { signoutReducer } from '../reduxstate/reducers/signupReducer';
const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{},[location])
  const handleLogout = (e)=>{
    e.preventDefault()
    localStorage.removeItem('token');
    navigate('/login');
    dispatch(logoutReducer())
    dispatch(signoutReducer())
    console.log(location.pathname)
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    console.log("inside handlelogin")
    navigate('/login')
    console.log(location.pathname)
  }
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container">
    <Link className="navbar-brand fst-italic" to="/" >Aadya</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/'?"active":""}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/men'?"active":""}`} to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/women'?"active":""}`} to="/women">Women</Link> 
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/jewlery'?"active":""}`} to="/jewlery">Jewelery</Link> 
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/contact'?"active":""}`} to="/contact">Contact</Link> 
        </li>
      </ul>
    
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-user"></i>
  </button>
  {!localStorage.getItem('token')?(<ul className="dropdown-menu">
    <li><button className="dropdown-item" onClick={handleLogin}>Login</button></li>
    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
  </ul>):
(<ul className='dropdown-menu'>
    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
    <li><button className="dropdown-item">Profile</button></li>
 </ul>)}
</div>
    <li className='nav-item d-flex'>
    <Link className="nav-link" to="/wishlist" role="button" style={{ fontSize: "1.5rem",
  marginLeft: "5px",
  marginRight: "5px",
  color: "rgb(221, 195, 195)"}}>
    <i className="far fa-regular fa-heart"></i>
          </Link>
      </li>

      <li className='nav-item d-flex'>
    <Link className="nav-link" to="/addtocart" role="button" style={{ fontSize: "1.5rem",
  marginLeft: "5px",
  marginRight: "5px",
  color: "rgb(221, 195, 195)"}}>
    <i className="far fa-solid fa-cart-shopping"></i>
          </Link>
      </li>
    <span className='mx-2'></span>


    

    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
