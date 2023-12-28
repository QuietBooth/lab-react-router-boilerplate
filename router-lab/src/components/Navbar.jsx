import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav-Bar' >
      <Link to={"/"} >
        <div  style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"20px"}} >
          <h1 style={{paddingLeft:"30px"}} >Kalvium</h1>
          <img style={{paddingLeft:"30px"}} src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </div>
      </Link>
      <div style={{width:"20%",display:"flex",alignItems:"center",padding:"10px",justifyContent:"space-around"}} >
        <Link to={"/About"} >
          <h1>About</h1>        
        </Link>

        <Link to={"/Contact"} >
          <h1>Contact</h1>  
        </Link>
      </div>
    </div>
  )
}

export default Navbar