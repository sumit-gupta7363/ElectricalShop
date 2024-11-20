import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from './Cards';

function Freeitems() {

  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:pd-20 px-4'>
       <div>
       <h1 className='font-semibold text-xl pb-2'>WELCOME TO THE WORLD OF ELECTRICAL SOLUTIONS FOR MODERN HOMES</h1>
        <p>
          Polycab India started with just a small electrical retail shop in Mumbai 
          a few decades back and has now evolved into one of India’s
          leading manufacturers of cables and wires and allied products.
        </p>
       </div>

      <div>
      <Slider {...settings}>
      {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </Slider>
      </div>
      </div>

    </>
  )
}

export default Freeitems