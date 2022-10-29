import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCartItemAsync,
  getAllCartsAsync,
} from "../reduxstate/reducers/getCartReducer";

import { addToWishlistAsync } from "../reduxstate/reducers/wishlistReducer";

const AddToCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.getCart.userCart);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCartsAsync());
  }, [dispatch]);
  const handleCartItemDelete = (ele) => {
    dispatch(deleteCartItemAsync(ele));
  };
  const handleBuyNow = (cart) => {

    navigate("/checkout",{state:cart});
  };
  const moveToWishlist=(ele)=>{
    dispatch(deleteCartItemAsync(ele));
    dispatch(addToWishlistAsync(ele));
  }
  const handleQuantity =(ele)=>{
  
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <h2 className="py-4 font-weight-bold">Cart Items</h2>
          <div className="row mt-2 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              {localStorage.getItem("token") && carts.length !== 0 ? (
                carts.map((ele) => {
                  return (
                    <div className="row" key={ele.id}>
                      <div
                        className="card md-3 my-3"
                        style={{ maxWidth: "540px", border: "solid 1px" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={ele.image}
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{ele.title}</h5>&nbsp;
                              <h6 className="card-text">
                                <b>Price: ${ele.price}</b>
                              </h6>
                              &nbsp;&nbsp;
                              {/* <h5>Qnt:{ele.quantity}</h5>&nbsp; */}
                              <div className="row">
                                <div className="col-md-8 mx-0 mt-lg-0">
                                  <ul className="pagination set_quantity">
                                    <h5 className="mx-0">Qnt:</h5>&nbsp;&nbsp;
                                    <li className="page-item">
                                      <button className="page-link">
                                        <i className="fas fa-minus"></i>
                                      </button>
                                    </li>
                                    <li className="page-item">
                            <input className="page-link" type="text" name="quantity" value={ele.quantity} onChange={()=>handleQuantity(ele)} id="textbox"/>
                              
                          </li>
                                    <li className="page-item">
                                      <button className="page-link">
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-8 mx-0 mt-lg-0">
                                  <button
                                    className="btn btn-dark mx-1"
                                    onClick={() => handleCartItemDelete(ele)}
                                  >
                                    <i className="fas fa-trash"></i> Delete
                                  </button>
                                  <button
                                    className="btn btn-dark"
                                    onClick={() => moveToWishlist(ele)}
                                  >
                                    <i className="fas fa-heart"></i> Wishlist
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : localStorage.getItem("token") ? (
                <h1 style={{"textAlign":"center","padding":"90px"}}>Please add items to cart</h1>
              ) : (
                <h1 style={{"textAlign":"center","padding":"90px"}}>Please login to add Cart</h1>
              )}
            </div>
            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
              <div className="right_side p-3 shadow bg-white">
                <h2 className="product_name mb-5">The total amount of</h2>
                <div className="price_individual d-flex justify-content-between">
                  <p>Product amount</p>
                  <p>
                    $<span>{carts.length!==0?carts.reduce((acc,cur)=>acc+=cur.price,0):0}</span>
                  </p>
                </div>
                <div className="price_individual d-flex justify-content-between">
                  <p>Shipping charges</p>
                  <p>${carts.length!==0?50.00:0}</p>
                </div>
                <hr />
                <div className="total_amt d-flex justify-content-between">
                  <p>The total amount of (including VAT)</p>
                  <p>
                    $<span id="total_cart_amt">{carts.length!==0?Math.round((carts.length!==0?carts.reduce((acc,cur)=>acc+=cur.price,0):0)+50):0}</span>
                  </p>
                </div>
                <button className="btn btn-primary text-uppercase" onClick={()=>handleBuyNow(carts)}>
                  checkout
                </button>
              </div>
              {/* discount code part */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
