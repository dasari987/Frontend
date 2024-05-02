import React from 'react'
import  allproductsdata  from './allproductsdata'
import { Link } from 'react-router-dom'

function Productsmaster() {   
  return (
    <div className='border border-dark m-2 p-2'>
      <h1>Products</h1>
       <ul>
           {
            allproductsdata.map((product,i)=>{
                return <Link to={'/productdetails/'+product.id}><li>{product.title}</li></Link>
            })
           }
       </ul>
    </div>
  )
}

export default Productsmaster
