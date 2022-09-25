import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { allProductsAsync } from "../reduxstate/reducers/allProducts";
import ShopItem from "./ShopItem";

const Home = () => {
  const navigate = useNavigate();
  const handleClick =(e)=>{
    e.preventDefault();
    if(e.target.name==="men"){
      navigate('/men')
    }
    else if(e.target.name==="women"){
      navigate('/women')
    }
    else if(e.target.name==="jewelery"){
      navigate('/jewlery')
    }
   
  }
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(allProductsAsync())
    //eslint-disable-next-line
  },[dispatch])

  const products = useSelector((state)=>state.allProd.allProducts);
  return (
    <>
    <div className="container">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Link to="/women">
      <img src={require('../assets/firstImage.jpg')} className="d-block w-100" alt="..."/>
      </Link>
      
      <div className="carousel-caption d-none d-md-block">
        <h1>Women Collection</h1>
        <button className="btn btn-light" name="women" onClick={handleClick}>Shop Now</button>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/men">
      <img src={require('../assets/secondImage.jpg')} className="d-block w-100" alt="..."/>
    </Link>
      <div className="carousel-caption d-none d-md-block">
        <h1>Men Collection</h1>
        <button className="btn btn-light" name="men" onClick={handleClick}>Shop Now</button>
      </div>
    </div>
    <div className="carousel-item">
    <Link to="/jewlery">
      <img src={require('../assets/JewelsImage.jpg')} className="d-block w-100" alt="..."/>
    </Link>
      <div className="carousel-caption d-none d-md-block">
        <h1>Jewelery Collection</h1>
        <button className="btn btn-light" name="jewelery" onClick={handleClick}>Shop Now</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    <div className="container my-3">
    <div className="row">
        {
          products && products.map((ele)=>{
            return(
              <div className="col-md-3" key={ele.id}>
                <ShopItem
                description ={ele.description}
                title ={ele.title}
                price={ele.price}
                imageUrl ={ele.image}
                id={ele.id}
                category={ele.category}
                />
              </div>
            )
          })
        }
      </div>

    </div>
    </>
  );
};

export default Home;
