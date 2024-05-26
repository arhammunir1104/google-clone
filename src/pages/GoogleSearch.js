import React from 'react'
import { useState, useEffect } from 'react'
import {key} from "../key"


function GoogleSearch({query}) {
    let [data, setData] = useState(null)
    useEffect(()=>{
    }, [query])
}

export {GoogleSearch}