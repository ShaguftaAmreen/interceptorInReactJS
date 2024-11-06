import React, { useEffect, useState } from 'react'
import instance from './axios'; 
const Fetchwithpost = () => {
    let [getData,setGetData]=useState([])
    useEffect(()=>{
        instance
        .get('/posts')
        .then((response)=>{
           // console.log("Amreen "+response)
         setGetData(response.data)
         
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
      {
      getData.map((ele)=>(
        <div key={ele.id}>
          <p>{ele.id}  {ele.title}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Fetchwithpost
