import React, { useState } from 'react'
import "./Search.css"
import { useHistory, useNavigate } from "react-router-dom";
function Search({hideBtn}) {
  let [input, setInput] = useState("");
  let navigate = useNavigate();
  function search(e){
    e.preventDefault();
    console.log()
    if(input.length > 0){
      navigate(`/search/${input}`)
    }
  }
  return (
    <>
        <div className='search'>
            <form onSubmit={search}>
            <div className='search_input'>
            <i class="fa-solid fa-magnifying-glass search_inputicon"></i>
            <input value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <i class="fa-solid fa-microphone search_inputicon"></i>
            </div>
            </form>
            
            {(!hideBtn)
             ?
             
            <div className='search_btn'>
            <button href='#' onClick={search}>Google Search</button>
            <button href='#'>I'm Feeling Lucky</button>
            </div>

              :
              
            <div className='search_btn search_btnHidden'>
            <button href='#' onClick={search}>Google Search</button>
            <button href='#'>I'm Feeling Lucky</button>
            </div>

            }
        </div>
    </>
  )
}

export {Search}