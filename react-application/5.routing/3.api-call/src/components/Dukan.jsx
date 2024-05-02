import React, { useEffect, useState } from 'react'

function Dukan() {

    var [categories,setCategories] = useState()

    useEffect(()=>{
        fetch('https://fakestoreapi.in/api/products/category')
        .then((res)=>{return res.json()})
        .then((data)=>{setCategories([...data.categories])})
        .catch((err)=>{console.log(err)})
    },[])

  return (
    <div className='border border-dark m-2 p-2'>
      <h1>DUKAN COMPONENT</h1>
      {
        categories?.map((c)=>{
            return <li>{c}</li>
        })
      }
    </div>
  )
}

export default Dukan
