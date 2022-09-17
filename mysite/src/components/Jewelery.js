import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { jeweleryAyncProds } from '../reduxstate/reducers/jeweleryProducts';
import ShopItem from './ShopItem';

const Jewelery = () => {
 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(jeweleryAyncProds())
    //eslint-disable-next-line
  },[dispatch])

const products= useSelector((state)=>state.jeweleryProd.jewelery)
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
export default Jewelery
