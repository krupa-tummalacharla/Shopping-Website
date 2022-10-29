import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCartAsync } from '../reduxstate/reducers/addToCartReducer';

import { deleteWishlistAsync, getAllWishlistAsync } from '../reduxstate/reducers/wishlistReducer';

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist= useSelector(state=>state.wishlist.getWishlist)
  useEffect(()=>{
    dispatch(getAllWishlistAsync());   
  },[dispatch])
  const handleAddtoCart =(ele)=>{
    if(localStorage.getItem('token')){
      dispatch(addToCartAsync(ele));
      dispatch(deleteWishlistAsync(ele));
      navigate('/addtocart')
    }
    else{
      navigate('/login')
    }
  }
  const handelDeleteWishlist =(ele)=>{
    if(localStorage.getItem('token')){
      dispatch(deleteWishlistAsync(ele));

    }
  }
  return (
    <div className='container my-3'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {localStorage.getItem('token')&&wishlist.length!==0?wishlist.map(ele=>{
    return( <div className="col" key={ele.id} ><div className="card" style={{
      display:"flex",
      justifyContent:"flex-end",
      border:"groove 3px",
      position:"static"
  }}>
      <img src={ele.image} className="card-img-top" alt="..." style={{width:"295px", height:"205px",padding:"10px 0 0 63px"}}/>
      <div className="card-body">
        <h5 className="card-title">{ele.title.slice(0,20)}...</h5>
        <p className="card-text"><span>Price: ${ele.price}</span></p>
        <p className="card-text"><span>Qnt:{ele.quantity}</span></p>
        <div className='row'>
          <div className="col-md-8">
          <button onClick={()=>handelDeleteWishlist(ele)} className='btn btn-dark mx-3'>Delete</button>
          <button className='btn btn-dark'onClick={()=>handleAddtoCart(ele)}>AddToCart</button>
          </div>
          </div>
      </div>
    </div></div>)}):localStorage.getItem('token')?<h3 style={{"textAlign":"center"}}>Please add your wishlist</h3>:<h1>Please login to add wishlist</h1>}
  </div>
  
  </div>
  )
}

export default WishList
