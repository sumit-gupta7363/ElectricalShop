import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json"
import {Link} from"react-router-dom"

function Product() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:pd-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-12'>
            Best of Electricals is an India’s online electrical shopping 
            store to buy premium electrical products, switches & sockets,
            wires, tools, meters, home appliances for industrial and 
            home uses at great discounts.leczo.com is India's best online 
            electrical shopping store, supplying world-class electrical 
            products to meet all industrial and residential purposes. 
            We are the leading wide-variety of electrical product suppliers, 
            dealers, and distributors in India, serving B2B B2C customers.
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Product;
