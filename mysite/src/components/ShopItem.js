import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ShopItem = (props) => {
    const {title, imageUrl, price} = props;
    const navigate = useNavigate();
    const handleClick=(e)=>{
      e.preventDefault();
      navigate('/details',{state:props})
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
          <Link to="/wishlist" className="btn btn-dark my-1">
           WISHLIST <i className="fa-regular fa-heart"></i>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default ShopItem
