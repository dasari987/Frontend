import React from 'react'
import { useParams } from 'react-router-dom'
import allproductsdata from './allproductsdata';
import { useProductDetails } from '../hooks/useProductDetails';

function Productdetails() {

    var params = useParams();
    console.log(params)

    var details = useProductDetails(+(params.id))
    console.log(details)

  return (
    <div className='border border-dark m-2 p-2 w-50 bg-primary' style={{textAlign:'center'}}>
         {/* <h1>Product Details</h1> */}
          
            <div>
              <p>{details.title}</p>
                  <img className='w-25' src={details.image} alt="" />
                  <p>Price: {details.price}</p>
            </div>
           
    </div>
  )
}

export default Productdetails
