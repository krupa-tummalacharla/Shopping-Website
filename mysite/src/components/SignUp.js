import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { handleSignupAysnc } from "../reduxstate/reducers/signupReducer";
const SignUp = () => {
  const inputStyle = {
    border: "groove 2px",
    borderColor: "olivedrab",
  };
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
    gender: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singup = useSelector(state=>state.signup.signupRes);
  useEffect(()=>{
    if(singup.success){
      navigate('/')
    }
    else if(!singup.success&&singup.error){
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword:"",
          gender: "",
        })
        navigate('/signup')
    }
    else{
      navigate('/signup')
    }
  },[navigate,singup])
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user.password===user.confirmPassword){
      dispatch(handleSignupAysnc(user))
    }
    else{
      setUser({...user,"confirmPassword":""})
      alert("password and confirm password are not same")
    }
  }
  return (
    <div className="container my-3">
      <form
        className="align-items-center"
        style={{
          padding: "10px 61px 50px 140px",
          margin: "25px 39px 68px 41px",
        }}
        onSubmit={handleSubmit}
      >
        <h1
          className="mb-4 align-content-lg-center"
          style={{ fontFamily: "none", paddingLeft: "27%" }}
        >
          Sign up
        </h1>
        <div className="row mb-4">
          <label htmlFor="firstName" className="col-sm-3 col-form-label">
            First Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="firstName"
              style={inputStyle}
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
              min={3}
            />
          </div>
        </div>
        <div className="row mb-4">
          <label htmlFor="lastName" className="col-sm-3 col-form-label">
            Last Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="lastName"
              style={inputStyle}
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
              min={3}
            />
          </div>
        </div>
        <div className="row mb-4">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-5">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              style={inputStyle}
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            
            />
          </div>
        </div>
        <div className="row mb-4">
          <label htmlFor="password" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-5">
            <input
              type="password"
              className="form-control"
              id="password"
              style={inputStyle}
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              min={5}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="confirmPassword" className="col-sm-3 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-5">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              style={inputStyle}
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
              min={5}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="text" className="col-sm-3 col-form-label">
            Gender
          </label>
          <div className="col-sm-5">
            <div className="form-check form-check-inline my-2">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}

              />
              <label
                className="form-check-label"
                htmlFor="female"
                style={{ fontFamily: "initial", fontWeight: "bold" }}
              >
                Female
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor="male"
                style={{ fontFamily: "initial", fontWeight: "bold" }}
              >
                Male
              </label>
            </div>
          </div>
        </div>
        <div className="center" style={{ paddingLeft: "26%" }}>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
