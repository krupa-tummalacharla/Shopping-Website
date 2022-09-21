import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishlistAsync } from '../reduxstate/reducers/wishlistReducer';

const WishList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllWishlistAsync());

  })
  const handleAddtoCart =()=>{

  }
  const wishlist= useSelector(state=>state.wishlist.getWishlist)
  return (
    <div className='container my-3'>
    <h1>WishList</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    {wishlist.length!==0?wishlist.map(ele=>{
    return(<div class="card" style={{
      display:"flex",
      justifyContent:"flex-end",
      border:"groove 3px",
      position:"static"
  }}>
      <img src={ele.image} class="card-img-top" alt="..." style={{width:"295px", height:"205px",padding:"10px 0 0 63px"}}/>
      <div class="card-body">
        <h5 class="card-title">{ele.title}</h5>
        <p class="card-text"><span>Price: ${ele.price}</span></p>
        <p class="card-text"><span>Qnt:{ele.quantity}</span></p>
        <div className='row'>
          <div className="col-md-8">
          <button className='btn btn-dark mx-3'>Delete</button>
          <button className='btn btn-dark'onClick={handleAddtoCart}>AddToCart</button>
          </div>
          </div>
      </div>
    </div>)}):<h1>Please login to add wishlist</h1>}
  </div>
  </div>
  </div>
  )
}

export default WishList
