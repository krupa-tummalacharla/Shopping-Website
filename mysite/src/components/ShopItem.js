import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlistAsync } from '../reduxstate/reducers/wishlistReducer';

const ShopItem = (props) => {
    const {title, imageUrl, price} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick=(e)=>{
      e.preventDefault();
      navigate('/details',{state:props})
    }
    const handleWishlist =(e)=>{
      e.preventDefault();
      if(localStorage.getItem('token')){
        dispatch(addToWishlistAsync(props));
        navigate('/wishlist',{state:props})
      }else{
        navigate('/login')
      }
      
    }
  return (
    <div className='my-3'>
    <div className="card" style={{
        display:"flex",
        justifyContent:"flex-end",
        border:"groove",
        position:"static"
    }}>
      <Link onClick={handleClick} to="/">
      <img src={imageUrl} className="card-img-top" alt="..."  style={{width:"254px", height:"230px"}}/>
      </Link>
        
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,20)}...</h5>
          
          <h5 className="card-text">
            Price: $ {price}
          </h5>
          <button className="btn btn-dark my-1" onClick={handleWishlist}>
           WISHLIST <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      </div>
  )
}

export default ShopItem
