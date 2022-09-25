import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlistAsync } from '../reduxstate/reducers/wishlistReducer';

const ShopItem = (props) => {
    const {title, image, price,id} = props;
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
    const wishlist= useSelector(state=>state.wishlist.getWishlist)
    // console.log(wishlist)
  return (
    <div className='my-3'>
    <div className="card" style={{
        display:"flex",
        justifyContent:"flex-end",
        border:"groove",
        position:"static"
    }}>
      <Link onClick={handleClick} to="/">
      <img src={image} className="card-img-top" alt="..."  style={{width:"254px", height:"230px"}}/>
      </Link>
        
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,20)}...</h5>
          
          <h5 className="card-text">
            Price: $ {price}
          </h5>
          <button disabled={wishlist.filter(ele=>ele.id===id).length>0&&localStorage.getItem('token')} className="btn btn-dark my-1" onClick={handleWishlist}>
           WISHLIST <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      </div>
  )
}

export default ShopItem
