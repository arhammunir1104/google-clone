import React, { useEffect, useState } from 'react'
import { useParams , NavLink} from 'react-router-dom'
import {key} from "../key"
import "./Search.css"
import {Search} from "../Components/Search"
import googleLogo from "../imgs/googlelogo.png"

function SearchPage() {
  let {query} = useParams();
  // console.log(query)
  let context_key = "2604aeb2c1def4280"
  let [data, setData] = useState([])
  let [searchInfo, setSearchInfo] = useState({})
  useEffect(()=>{
    let fetchData = async ()=>{
      let data_fetch = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${context_key}&q=${query}`)
      let res = await data_fetch.json();
      // console.log(res)
      setData(res.items)
      setSearchInfo(res.searchInformation)
  }
  fetchData();
  }, [query])

  
  // useEffect(()=>{
  //   let fetchData = async ()=>{
  //     let data_fetch = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${context_key}&q=x`)
  //     console.log(data_fetch)
  //     let res = await data_fetch.json();
  //     console.log(res)
  //     setData(res.items)
  // }
  // fetchData();
  // }, [])

  return (
    <>
    <div className='searchPage'>
      <div className='searchPage_header'>
        <div className='search_upper'>
          
        <NavLink to="/">
          <img src={googleLogo} alt='#' className='searchPage_logo'/>
        </NavLink>

        
        <div className='searchPage_header2'>
          <Search hideBtn={true}/>
        </div> 
        </div>
        
        <div className="searchPage_options">
          <div className='searchPage_left'>

            <div className='searchPage_option'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <NavLink to="/all">All</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <i class="fa-solid fa-file-invoice"></i>
            <NavLink to="/news">News</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <i class="fa-solid fa-image"></i>
            <NavLink to="/images">Images</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <i class="fa-solid fa-tag"></i>
            <NavLink to="/shopping">Shopping</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <i class="fa-solid fa-location-dot"></i>
            <NavLink to="/maps">Maps</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <NavLink to="/more">More</NavLink>
            </div>

          </div>
          <div className='searchPage_right'>
            
            <div className='searchPage_option'>
            <NavLink to="/news">Settings</NavLink>
            </div>
            
            <div className='searchPage_option'>
            <NavLink to="/news">Tools</NavLink>
            </div>
            </div>

        </div>
      </div>
      <div className='searchPage_results'>
        <p className='searchpage_resultCount'>
          About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime}s) for {query}
        </p>

        {data.map((val)=>{
          // console.log("Value",val)
          // console.log("Value",val.pagemap.cse_image)
          return(
            <div className="searchPage_result"> 
            <a href={val.link}>
             {( val.pagemap.cse_image !== undefined) ? <img src={val.pagemap.cse_image[0].src} alt='' className='searchPage_resultImg'/>:""}  
              {val.displayLink} </a>
            <a href={val.link} className='searchpage_resultTitle'>
              <h2 >{val.title}</h2>
            </a>
            <p className='searchPage_resultSnippent'>{val.snippet}</p>
            </div>
          )
        })}

    </div>
    
    </div>
    </> 
  )
}

export {SearchPage}

{/* <script async src="https://cse.google.com/cse.js?cx=2604aeb2c1def4280">
</script>
<div class="gcse-search"></div> */}