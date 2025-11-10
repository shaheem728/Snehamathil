import React from 'react'
import { gallery } from '../../assets/assets'
import PanoramaSwiper from '../../components/PanoramaSwiper'
import {  useNavigate  } from 'react-router-dom';
const Gallery = () => {
  const navigate =  useNavigate ()
  return (
     <section className="bg-[#F0FFFB] py-40 text-center">
      {/*  Our work Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#375E56] mb-4">
          Our Work Speaks for Itself
        </h2>
        <p className="text-[#375E56] w-[35%] font-semibold mx-auto mb-12">
          Discover the strength, beauty, and craftsmanship behind every Sneha
          Marts. Each wall is built with precision, care, and a promise of long
          lasting quality.
        </p>

        {/* Carousal Slide */}
        <div className="mb-10">
            {/* <PanoramaSlider/> */}
            <PanoramaSwiper/>
        </div>

        {/* Gallery Section */}
        <div className='md:px-32'>
        <h3 className="text-left text-2xl font-semibold text-gray-800 mb-8">
          Explore Our Works
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative mt-5 shadow-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-40 object-cover"
              />
                <p className="absolute left-2 bottom-3 text-lg font-medium text-white">
                  {item.text}
                </p>
              
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-12">
          <button onClick={()=>navigate('/contact')} className="bg-[#2F5D50]  text-white px-6 py-2 rounded-full  transition">
            Contact Us
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
