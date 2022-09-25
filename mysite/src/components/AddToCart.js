import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItemAsync, getAllCartsAsync } from '../reduxstate/reducers/getCartReducer';

const AddToCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state=>state.getCart.userCart);
  useEffect(()=>{
    dispatch(getAllCartsAsync());
  },[dispatch])
  const handleCartItemDelete = (ele)=>{
    dispatch(deleteCartItemAsync(ele));
  }
  return (
    <div className='container my-3'>
      <h1>Cart</h1>
      
        {localStorage.getItem('token')&&carts.length!==0?carts.map(ele=>{
      return (<div className='row' key={ele.id}>
        <div className="card md-3 my-3" style={{maxWidth: "540px",border:"solid 1px"}} >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={ele.image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{ele.title}</h5>&nbsp;
            <h6 className="card-text"><b>Price: ${ele.price}</b></h6>&nbsp;
            <h5>Qnt:{ele.quantity}</h5>&nbsp;
            <div className='row'>
            <div className="col-md-8">
            <button onClick={()=>handleCartItemDelete(ele)} className='btn btn-dark mx-3'>Delete</button>
            <button className='btn btn-dark'>Buy Now</button>
            </div>
            </div>
          </div>
      </div>
    </div>
    </div>
      </div>)
     }):localStorage.getItem('token')?<h1>Please add your Cart</h1>:<h1>Please login to add Cart</h1>}
      
     
    </div>
  )
}

export default AddToCart
