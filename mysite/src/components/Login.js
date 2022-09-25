import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { handleLoginAysnc } from "../reduxstate/reducers/loginReducer";


const Login = () => {

  const inputStyle ={
      padding:"15px",
      width:"50%",
      margin:"5px 0 22px 0",
      backgroundColor:"#ddd",
      background:"#f1f1f1",
      outline:"none",
      border:"solid 2px",
  }
  const [credentials,setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const res = useSelector(state=>state.login.loginRes);
  const onChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
useEffect(()=>{
  if(res.success){
    navigate('/')
  }
  else{
    navigate('/login')
  } 
},[navigate,res])
  const handleSumbmit = (e)=>{
    e.preventDefault();
    dispatch(handleLoginAysnc(credentials));
  }
  return (
    <div className='container' style={{ margin: "auto",
      width: "50%",
      padding: "60px"}}>
      <h1 >Login</h1>
    <form onSubmit={handleSumbmit}>
  <div className="mb-3 my-4">
    <label htmlFor="email" className="form-label"><b>Email</b></label>
    <input type="email" className="form-control" onChange={onChange} id="email" name="email" value={credentials.email} aria-describedby="emailHelp" style={inputStyle}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"><b>Password</b></label>
    <input type="password" className="form-control" onChange={onChange} id="password" name="password" value={credentials.password} style={inputStyle}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
{/* {!res.success&&res.error?<h1>Please enter correct Details</h1>:""} */}
</div>
  )
}

export default Login
