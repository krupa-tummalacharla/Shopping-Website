import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartsAsync } from '../reduxstate/reducers/getCartReducer';

const AddToCart = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCartsAsync());

  })
  const carts = useSelector(state=>state.getCart.userCart);
  return (
    <div className='container my-3'>
      <h1>Cart</h1>
      
        {carts.length!==0?carts.map(ele=>{
      return (<div className='row'>
        <div className="card md-3 my-3" style={{maxWidth: "540px",border:"solid 1px"}} key={ele.id}>
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
            <button className='btn btn-dark mx-3'>Delete</button>
            <button className='btn btn-dark'>Buy Now</button>
            </div>
            </div>
          </div>
      </div>
    </div>
    </div>
      </div>)
     }):<h1>Cart is Empty</h1>}
      
     
    </div>
  )
}

export default AddToCart
