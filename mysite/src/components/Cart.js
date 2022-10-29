import React from "react";

const Cart = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              <div className="card p-4">
                <h2 className="py-4 font-weight-bold">Cart 2 Items</h2>
                <div className="row">
                  {/* cart images div */}
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img src="../assets/firstimage.png" className="img-fluid" alt="cart img" />
                  </div>
                  {/* cart product details */}
                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      {/* product name */}
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">Blue zara shirt</h1>
                        <p className="mb-2">Shirt blue</p>
                        <p className="mb-2">color:blue</p>
                        <p className="mb-3">size:m</p>
                      </div>
                      {/* quantity inc dec */}
                      <div className="col-6">
                        <ul className="pagination justify-content-end set_quantity">
                          <li className="page-item">
                            <button className="page-link">
                            <i className="fas fa-minus"></i>
                            </button>
                          </li>
                          {/* <li className="page-item">
                            <input className="page-link" type="text" name="quantity" value="1" id="textbox">
                              Previous
                            </input>
                          </li> */}
                          <li className="page-item">
                            <button className="page-link">
                            <i className="fa-solid fa-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* remove move and price */}
                    <div className="row">
                        <div className="col-8 d-flex justify-content-between remove_wish">
                            <p><i className="fas fa-trash"></i> Remove item</p>
                            <p><i className="fas fa-heart"></i> Move to wishlist</p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money">
                          <h3>$<span id="itmeval"></span>0.00</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right side div */}
            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                    <h2 className="product_name mb-5">The total amount of</h2>
                    <div className="price_individual d-flex justify-content-between">
                        <p>Product amount</p>
                        <p>$<span>0.00</span></p>
                    </div>
                    <div className="price_individual d-flex justify-content-between">
                        <p>Shipping charges</p>
                        <p>$50.00</p>
                    </div>
                    <hr/>
                    <div className="total_amt d-flex justify-content-between">
                    <p>The total amount of (including VAT)</p>
                    <p>$<span id="total_cart_amt">0.00</span></p>
                    </div>
                    <button className="btn btn-primary text-uppercase">checkout</button>
                </div>
                {/* discount code part */}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
