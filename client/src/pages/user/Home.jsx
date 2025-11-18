import React, { useState,useContext } from 'react'
import {assets, carousal, contacts, services, testimonials, works} from '../../assets/assets'
import {  useNavigate  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BuildWithUs from '../../components/BuildWithUs';
import GalleryContext from '../../context/GalleryContext'
import { X } from 'lucide-react';
const Ad = "/videos/ad.mov";

const Home = () => {
  const {showAd, setShowAd} = useContext(GalleryContext)
  const navigate =  useNavigate ()

  return (
    <section className='relative'>
     {/* Advertising */}
     {showAd && (
  <div className="fixed right-0 bottom-0 backdrop-blur-md flex justify-center items-center z-40">
    
    {/* Close Button */}
    <button 
      onClick={() => setShowAd(false)}
      className="absolute cursor-pointer top-1 right-1  px-1 py-1 rounded shadow-lg z-50"
    >
      <X  className='w-7 h-7 text-gray-500 md:w-10 md:h-10 cursor-pointer' />
    </button>

    {/* Video Ad */}
    <video 
      width="400" 
      controls 
      muted    
      playsInline  
      autoPlay 
      className="rounded-lg shadow-xl w-96 h-[30vh] md:h-[40vh] lg:h-[50vh] "
      onEnded={() => setShowAd(false)}
    >
      <source src={Ad} type="video/mp4" />
      <source src={Ad} type="video/ogg" />
    </video>
  </div>
)}

    {/* start Home Banner */}
      <div className=" mx-auto md:pt-16 flex justify-center relative h-[60vh] md:h-screen lg:h-screen">
               {/*Swiper Slide */}
               <Swiper modules={[Navigation,Autoplay,Pagination]}
               className='home-swiper' 
               spaceBetween={30} 
               slidesPerView={1} 
               autoplay={{ delay: 2500, disableOnInteraction:true, }} 
               navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn", }} 
               pagination={{ clickable: true }}
               loop={true} >
                   {carousal.map((slide, index) => 
                     (<SwiperSlide key={index}> 
                     <div
                        className="h-screen bg-no-repeat  bg-center flex flex-col justify-between items-center"
                        style={{ backgroundImage: `url(${slide.img})`,
                          backgroundSize:"100% 100%"
                         }}
                      >
                        {/* Dark overlay (optional for contrast) */}
                      <div className="absolute inset-0 bg-black/10 "></div>  
                      <div className='absolute top-1/3  flex flex-col items-center justify-center'>  
                      <h1 className=" text-lg md:text-5xl font-semibold md:mt-4  w-[80%] text-white text-center uppercase">{slide.title}</h1>
                      <div className='flex gap-3 mt-5 '>
                      <button onClick={()=>navigate('/contact')} className="cursor-pointer  mt-10 md:mt-6 px-2 py-2 md:px-8 md:py-3 text-sm bg-[#2F5D50]   text-white font-semibold">
                      CONTACT US
                      </button>
                      <button onClick={()=>navigate('/gallery')} className="cursor-pointer mt-10 md:mt-6 px-2 py-2 md:px-8 md:py-3 text-sm bg-white text-[#2F5D50] font-semibold">
                        VIEW GALLERY
                      </button>
                      </div>
                      </div>
                      </div> 
                      </SwiperSlide>
                     ))} 
                        </Swiper>

               {/* Custom Navigation Buttons */}
               <button
                  className="prevBtn hidden rounded-full md:flex absolute z-20 top-1/2 left-4 h-10 w-10 md:h-16 md:w-16  justify-center items-center bg-white/50"
               >
                  <img src={assets.leftArrow} alt="Prev" className="w-3 md:w-7" />
               </button>

               <button
                  className="nextBtn hidden md:flex absolute z-20 top-1/2 right-4  h-10 w-10 md:h-16 md:w-16  justify-center items-center rounded-full bg-white/50">
                  <img src={assets.rightArrow} alt="Next" className="w-3 md:w-7" />
               </button>
            </div>
   
     {/* end Home Banner */}
     {/* start services section */}
      <section className="py-24 bg-[#F0FFFB] text-center" id="services">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">Our Core Services</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 px-10 text-center">
        {services.map((s, i) => (
          <div key={i} className=" p-4 transition flex flex-col items-center justify-center">
            <img src={s.icon} alt={s.title} className="mx-auto w-16 h-16 mb-4" />
            <h3 className=" text-gray-700 uppercase w-[50%] ">{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
     {/* end services section */}
     {/* Start Wall Section */}
<section className="bg-[#375E56] text-white  min-h-screen flex items-center px-6 py-10">
  <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">

    {/* Left Text Section */}
    <div className="flex flex-col items-center  text-center md:text-right ">
      <div className='items-end'>
        <h2 className="text-3xl md:text-5xl font-semibold">
          More Than Just A Wall
        </h2>
        <p className="text-lg md:text-3xl font-medium italic mt-1">
          — It’s A Promise Of Quality.
        </p>
      </div>

      <p className="text-center text-gray-100 text-lg leading-relaxed max-w-xl mt-16">
        With Years of Experience In Concrete Slab Wall Works, We Bring You
        Reliable, Long-Lasting,And Elegant Boundary Solutions. <br />
        Our Team Ensures Precision,Perfect Finish,And Customer Satisfaction
        In Every Project We Take.
      </p>

      <button onClick={() => navigate('/gallery')} className="px-4 py-2 mt-10 cursor-pointer bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all">
        LEARN MORE
      </button>
    </div>

    {/* Right Image Collage */}
     {/* Right Image Collage */} <div className="lg:relative h-full md:h-atuto  md:w-1/2 w-full flex flex-col justify-center items-center"> 
     {/* Base Image */} 
     <img src={assets.Work_B} alt="Wall Design Center" className="lg:absolute lg:right-20 z-20 w-72 h-52 md:w-96 md:h-72 object-cover border-8 border-[#2F5D50] shadow-xl rounded-lg" /> 
     {/* Top Image */}
      <img src={assets.Add_Wall_Z1} alt="Wall Design Top" className="lg:absolute top-0 md:-top-[17em] md:right-0 w-72 h-52 md:w-80 md:h-64 object-cover border-8 border-[#2F5D50] shadow-md rounded-lg" /> 
     {/* Bottom Image */} 
     <img src={assets.Add_Wall_Z3} alt="Wall Design Bottom" className="lg:absolute bottom-0 md:-bottom-[17em] md:right-0 w-72 h-52 md:w-80 md:h-64  object-cover border-8 border-[#2F5D50] shadow-md rounded-lg" />
      </div>
  </div>
</section>
{/* End Wall Section */}
{/* Start BuildWithUs Section */}
 <BuildWithUs/>
{/* End BuildWithUs Section */}
{/* Start WhoAre Section */}
    <section  className="py-10  md:py-28 flex justify-center text-center items-center gap-10 px-3 md:px-10 bg-[#2F5D50]">
      <div className='w-full md:w-[65%]'>
        <h2 className="text-4xl font-semibold mb-4 text-white">Who We Are</h2>
        <p className="text-white text-xl">
         Building boundaries that last a lifetime — crafted with care,<br className='hidden md:flex' />
         strength, and trust.
        </p>
        <p className="text-white text-lg my-10 w-full text-center ">
        At Sneha Mathil, we specialize in creating high-quality precast slab walls that combine durability with elegant design.
        With years of experience in the construction field, our team focuses on delivering reliable, affordable, and beautifully
        finished wall solutions for homes, institutions, and commercial spaces across Kerala.
        </p>
        <p className="text-white text-lg w-full text-center ">
        Our commitment goes beyond construction — we believe every wall should reflect protection, beauty, and pride.From<br className='hidden md:flex' />
        site visit and measurement to installation and after-service, we ensure a seamless experience for every client.
        </p>
        <button onClick={()=>navigate('/about')} className="mt-10 px-3 py-2 text-sm text-black bg-white cursor-pointer uppercase">
          View More
        </button>
      </div>
    </section>
  {/* End WhoAre Section */}
  {/* Start Work Section */}
    <section  className="py-20 px-5 bg-[#F0FFFB] text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Works</h2>
      <p className='mb-10'>Explore our beautifully crafted precast walls — a blend of <br className='hidden md:flex' /> strength, style, and durability.</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {works.map((w, i) => (
          <div key={i} className="relative overflow-hidden shadow hover:shadow-lg ">
            <img src={w.img} alt={w.title} className="w-96 h-64 object-cover" />
            <h3 className="absolute inset-x-0 bottom-2 text-white font-medium uppercase">{w.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/gallery')} className="mt-6 cursor-pointer px-10 py-1.5 bg-[#2F5D50] rounded-full text-white">
        SEE MORE
      </button>
    </section>
  {/* End Work Section */}
  {/* Start Testimonials Section */}
      <section className=" min-h-screen   px-6 text-center bg-[#F0FFFB]">
      <h2 className="text-3xl font-bold text-gray-800 mb-5 uppercase">
        What Is Says Our Clients 
      </h2>
      <p className='text-lg font-semibold mb-2'>Hear from our happy customers who trusted us with their  dream projects. Their <br/> words inspire us to keep building with passion and precision.</p>

      <div className=" mx-auto px-5 md:px-20   flex justify-center md:relative min-h-[70vh] ">
        <Swiper
          className="testimonials-swiper"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {testimonials.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
                {group.map((t, i) => (
                  <div
                    key={i}
                    className={`bg-white p-5 shadow-lg border rounded-lg md:w-[45%] mx-auto ${
                      i === 0
                        ? "md:absolute md:top-10 md:-translate-y-1 md:left-30"
                        : "md:absolute md:top-1/2 md:-translate-y-1/6 md:-translate-x-1/2 md:right-1 "
                    }`}
                  >
                    <div className="flex md:flex-row flex-col space-y-3">
                      <div className="w-36 relative mx-auto md:mx-0">
                        <img
                          src={t.img}
                          alt="client"
                        />
                        <img
                          src={assets.Quote_Icon}
                          alt="Quote"
                          className="absolute -bottom-2 left-16"
                        />
                      </div>
                      <div className="relative  flex items-center w-full md:w-3/4 md:pl-7 space-y-3 text-left">
                        <p className=" font-semibold text-lg">{t.text}</p>
                        <h1 className="absolute bottom-0 right-0 text-sm font-semibold ">-{t.name}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  {/* End Testimonials Section */}
  {/* Start ContactUs Section */}
    <section className="h-full lg:h-screen py-16 px-6 md:px-20 bg-[#F0FFFB]">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:ps-36">
    Contact us
  </h2>

  <div
    className="max-w-6xl mx-auto  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-10  place-items-center ">
    {contacts.map((c, index) => (
      <div
        key={index}
        className={`
          ${c.id == 2 ? 'md:mt-28':''}
            bg-[#F0FFFB] 
          text-center 
          border border-gray-400 
          rounded-lg 
          transition-all 
          w-[60vw] h-64 
          md:w-80 md:h-80 
          lg:w-72 
          flex flex-col items-center 
          py-10 space-y-4
          `}
      >
        <img
          src={c.icon}
          alt={c.title}
          className="w-9 h-9 md:w-12 md:h-12 object-contain mb-5"
        />
        <h3 className="text-xl font-semibold">{c.title}</h3>
        <div className="text-xl font-semibold leading-relaxed pt-5 md:pt-16">
          {c.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

  {/* End ContactUs Section */}
  
    </section>
  )
}

export default Home
