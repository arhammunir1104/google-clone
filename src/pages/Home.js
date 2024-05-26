import React from 'react'
import "./Home.css"
import {NavLink} from "react-router-dom"
import googleLogo from "../imgs/googlelogo.png"
import {Search} from "../Components/Search.js"
 function Home() {
  return (
    <>
      <div className='home'>
        <div className='home_header'>
            <div className='home_headerLeft'>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/store">Store</NavLink>
            </div>
            <div className='home_headerRight'>
              <NavLink to="/gmail">Gmail</NavLink>
              <NavLink to="/images">Images</NavLink>
              <i class="fa-solid fa-user"></i>

            </div>
        </div>
        <div className='home_body'>
          <img src={googleLogo} alt=''/>
          
        <div className='home_inputContainer'>
          <Search hideBtn={false}/>
        </div>
        </div>

      </div>
    </>
  )
}
export {Home}
