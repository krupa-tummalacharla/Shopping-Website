import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { addToCartAsync } from '../reduxstate/reducers/addToCartReducer';

const DetailsPage = (props) => {
    const {state }= useLocation();
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const {description, image, price,title}= state;
    const handleAddtoCart =(e)=>{
      e.preventDefault();
      if(localStorage.getItem('token')){
        dispatch(addToCartAsync(state));
        navigate('/addtocart')
      }
      else{
        navigate('/login')
      }
    }
  return (
<div className="container-fluid">
      <div className="row"> 
 <div className="column left" >
    <picture>
        <img className="img-magnifier-container" src={image} alt="..." style={{width:"150%",borderRadius:"10px"}}/>
        </picture>
 </div>          
 <div className="column right">
  <div className="product"><h1>{title}</h1></div>
      <div className="productdesc my-5">
      <h2>Description:</h2>
      <p>{description}</p>
      <h5>Price: ${price}</h5>
      <button onClick={handleAddtoCart} className='btn btn-dark my-4'>Add to Cart</button>
      </div>
 </div>
 </div>
 </div>
  )
}

export default DetailsPage
