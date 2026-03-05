"use client"

import { count } from "console";
import { useState } from "react"

function DemoClient() {
    const [data , setData]  = useState(0);
    const handler = ()=>{
        setData(data + 1);
    }
  return (
    <>
        <h1>{data}</h1>
        <button onClick={handler}>increamet</button>
    </> 
  )
}   

export default DemoClient