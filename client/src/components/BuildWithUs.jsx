import React from 'react'
import { assets } from '../assets/assets'
import { useLocation,useNavigate } from "react-router-dom";
const BuildWithUs = () => {
  const location = useLocation();
  const navigate =  useNavigate ()
  return (
    <section className="py-28 px-14 bg-[#F0FFFB] text-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Build With Us</h2>
          <p className="text-gray-600 mb-12">
            We provide reliable and affordable slab wall solutions <br />
            tailored to your space and style.
          </p>
    
          <div className="grid md:grid-cols-2 gap-10 px-6 md:px-16">
            {/* Residential Section */}
            <div className="bg-gray-50   transition p-4 text-left">
              <img
                src={assets.Build_A}
                alt="Residential Sneha Mathil Construction"
                className="w-full h-80 object-cover rounded-sm shadow-xl mb-4"
              />
              <h3 className="font-semibold  mb-2 text-sm md:text-base">
                RESIDENTIAL SNEHA MATHIL CONSTRUCTION
              </h3>
              <p className="font-medium text-md">
                We build beautifully designed slab walls that enhance your home’s
                safety and appearance. Every Sneha Mathil is crafted with
                high-quality concrete and expert finishing for long-term durability.
              </p>
            </div>
    
            {/* Commercial Section */}
            <div className="bg-gray-50 transition p-4 text-left">
              <img
                src={assets.Build_B}
                alt="Commercial & Boundary Wall Solution"
                className="w-full h-80 object-cover rounded-sm shadow-xl mb-4"
              />
              <h3 className="font-semibold  mb-2 text-sm md:text-base">
                COMMERCIAL &amp; BOUNDARY WALL SOLUTION
              </h3>
              <p className="font-medium text-md ">
                Our strong and sleek precast slab walls are perfect for boundary and
                institutional projects. Built for strength and precision, ensuring
                security with a premium aesthetic touch.
              </p>
            </div>
          </div>
        <div className={`mt-12 ${location.pathname !== "/about"?'hidden':''} `}>
          <button onClick={()=>navigate('/gallery')} className="bg-[#2F5D50]  text-white px-6 py-2 rounded-full  transition">
            SEE GALLERY
          </button>
        </div>
        </section>
  )
}

export default BuildWithUs
