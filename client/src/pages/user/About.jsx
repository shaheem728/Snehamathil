import React from 'react'
import { assets, OusrServices } from '../../assets/assets'
import BuildWithUs from '../../components/BuildWithUs'
import {  useNavigate  } from 'react-router-dom';
const About = () => {
  const navigate =  useNavigate ()
  return (
    <div className='bg-[#F0FFFB] '>
    {/* Start AboutUs section */}
    <section className="py-20 h-screen px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mt-5 mb-12">About us</h2>

      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl  mx-auto">
        {/* Left - Images */}
        <div className="flex flex-col gap-6 relative py-20 order-2 md:order-1">
          <img
            src={assets.Slide_1}
            alt="Boundary wall"
            className="absolute top-0 left-0 shadow-md w-1/2 md:w-8/12 object-cover"
          />
          <img
            src={assets.Slide_3}
            alt="Construction site"
            className="absolute z-30 -bottom-40 md:-bottom-72 right-4/12 md:right-10 border-white border-4 bor shadow-md  w-1/2 md:w-8/12 object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className='order-1 md:order-2'>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            Building Strong Walls, <br /> Creating Stronger Trust
          </h3>
          <p className="mb-4 leading-relaxed">
            Sneha Mathil is a trusted name in precast slab wall construction —
            offering reliable, affordable, and beautifully designed boundary
            solutions for homes, institutions, and industries.
          </p>
          <p className="leading-relaxed mb-6">
            With a focus on quality, precision, and customer satisfaction,
            we’ve been helping clients transform open spaces into secure and
            elegant boundaries.
          </p>
          <button onClick={()=>navigate('/contact')} className="bg-[#2F5D50] text-white font-medium px-6 py-2 rounded-full transition-all">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
    {/* End AboutUs section */}
    {/* Start Services Section */}
      <section className="py-20 px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mt-16 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          We provide complete end-to-end solutions for concrete slab wall
          construction — from design to installation — ensuring durability,
          beauty, and affordability in every project.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 px-40   ">
        {OusrServices.map((service) => (
          <div
            key={service.id}
            className="bg-white w-64 h-[55vh] rounded shadow-xl hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
                <img src={service.icon} alt="" className='w-8 h-8' />
              </div>
            </div>

            <div className="pt-10 pb-6 px-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* End Services Section */}
    {/* Start Mission & Vision Section */}
     <section className="bg-[#2F5D50] text-white py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left Side - Mission Text */}
        <div className="flex-1 space-y-10 text-right">
          {/* Mission */}
          <div>
            <h2 className=" text-2xl md:text-3xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed ">
              To deliver durable, cost-effective, and aesthetic wall solutions
              that reflect both strength and style — ensuring every project meets
              the highest standards of craftsmanship and safety.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className=" text-2xl md:text-3xl font-semibold mb-3">
              Our Vision
            </h2>
            <p className=" text-sm md:text-base text-gray-100 leading-relaxed ">
              To be Kerala’s most trusted name in modern wall construction — known
              for innovation, quality, and customer-first service.
            </p>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 flex  md:gap-5   relative">
         <div className='w-1/2 flex flex-col space-y-3'>
          <img
            src={assets.Slide_4}
            alt="Mission wall 1"
            className="mission_image"
          />
          <img
            src={assets.Gallery_6}
            alt="Mission wall 2"
            className=" mission_image"
          />
          </div> 
          <div className='w-1/2 absolute -top-1/12  -right-4   flex flex-col space-y-3'>
          <img
            src={assets.Gallery_1}
            alt="Vision wall 2"
            className="mission_image"
          />
              <img
            src={assets.Gallery_7}
            alt="Vision wall 1"
            className="mission_image"
          />
          </div>
        
        </div>
      </div>
    </section>
    {/* End Mission & Vision Section */}
    {/* Start BuildWithUs Section */}
    <BuildWithUs/>
    {/* End BuildWithUs Section */}
    </div>
  )
}

export default About
