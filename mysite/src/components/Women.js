import React, { useEffect } from 'react'
import ShopItem from './ShopItem';
import {useDispatch, useSelector} from 'react-redux'
import { womenProductsAsync } from '../reduxstate/reducers/womenProducts';

const Women = () => {
 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(womenProductsAsync())
    //eslint-disable-next-line
  },[dispatch])
  const products = useSelector((state)=>state.womenCloth.womenProducts)

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
                image ={ele.image}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Women
