import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer'

function Products() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
       <Product/>
    </div>
    <Footer/>
    </>
  )
}

export default Products