import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { menProductsAsync } from "../reduxstate/reducers/menProducts";
import ShopItem from "./ShopItem";


const Men = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(menProductsAsync())
    //eslint-disable-next-line
  },[dispatch])

  const products = useSelector((state)=>state.menCloth.menProducts);
  return (
    <div className="container my-3">
      <div className="row">
        {
          products && products.map((ele)=>{
            return(
              <div className="col-md-3" key={ele.id}>
                <ShopItem
                id={ele.id}
                category={ele.category}
                description ={ele.description}
                title ={ele.title}
                price={ele.price}
                imageUrl ={ele.image}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Men;
