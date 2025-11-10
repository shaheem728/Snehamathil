import React from 'react'
import {assets, carousal, contacts, services, testimonials, works} from '../../assets/assets'
import {  useNavigate  } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BuildWithUs from '../../components/BuildWithUs';

const Home = () => {
  const navigate =  useNavigate ()
  return (
    <>
    {/* start Home Banner */}
      <div className="container mx-auto pt-16   flex justify-center md:relative h-screen">
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
                        className="h-screen  bg-cover bg-center flex flex-col justify-between items-center"
                        style={{ backgroundImage: `url(${slide.img})` }}
                      >
                        {/* Dark overlay (optional for contrast) */}
                      <div className="absolute inset-0 bg-black/10 "></div>  
                      <div className='absolute top-1/3  flex flex-col items-center justify-center'>  
                      <h1 className=" text-5xl font-semibold md:mt-4  w-[80%] text-white text-center uppercase">{slide.title}</h1>
                      <div className='flex gap-3 mt-5 '>
                      <button onClick={()=>navigate('/contact')} className="mt-6 px-8 py-3 bg-[#2F5D50] hover:bg-green-700  text-white font-semibold">
                      CONTACT US
                      </button>
                      <button onClick={()=>navigate('/gallery')} className="mt-6 px-8 py-3 bg-white text-[#2F5D50] font-semibold">
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
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Core Services</h2>
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
<section className="bg-[#375E56] text-white min-h-[70vh] flex items-center px-6 md:px-20 py-10">
  <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

    {/* Left Text Section */}
    <div className="flex flex-col items-center  text-center md:text-right md:w-1/2 space-y-5">
      <div className='items-end'>
        <h2 className="text-3xl md:text-4xl font-semibold">
          More Than Just A Wall
        </h2>
        <p className="text-lg font-medium italic mt-1">
          — It’s A Promise Of Quality.
        </p>
      </div>

      <p className="text-center text-gray-100 text-sm leading-relaxed max-w-md">
        With Years of Experience In Concrete Slab Wall Works, We Bring You
        Reliable, Long-Lasting,And Elegant Boundary Solutions. <br />
        Our Team Ensures Precision,Perfect Finish,And Customer Satisfaction
        In Every Project We Take.
      </p>

      <button className="px-4 py-2 bg-white text-[#375E56] font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all">
        LEARN MORE
      </button>
    </div>

    {/* Right Image Collage */}
    <div className="relative h-[65vh] md:h-auto md:w-1/2 w-full flex justify-center items-center">
      {/* Base Image */}
      <img
        src={assets.Work_B}
        alt="Wall Design Center"
        className="absolute right-40  z-20 w-72 h-52 md:w-72 md:h-60 object-cover border-8 border-[#2F5D50] shadow-xl rounded-lg"
      />

      {/* Top Image */}
      <img
        src={assets.Add_Wall_Z1}
        alt="Wall Design Top"
        className="absolute top-0 md:-top-[14em] right-16 w-56 h-52 md:w-64 md:h-52 object-cover border-8 border-[#2F5D50] shadow-md rounded-lg"
      />

      {/* Bottom Image */}
      <img
        src={assets.Add_Wall_Z3}
        alt="Wall Design Bottom"
        className="absolute bottom-0 md:-bottom-[14em] right-16 w-56 h-52 md:w-64 md:h-52 object-cover border-8 border-[#2F5D50] shadow-md rounded-lg"
      />
    </div>
  </div>
</section>
{/* End Wall Section */}
{/* Start BuildWithUs Section */}
 <BuildWithUs/>
{/* End BuildWithUs Section */}
{/* Start WhoAre Section */}
    <section  className=" py-28 flex justify-center text-center items-center gap-10 px-10 bg-[#2F5D50]">
      <div className='w-[55%]'>
        <h2 className="text-4xl font-semibold mb-4 text-white">Who We Are</h2>
        <p className="text-white text-lg">
         Building boundaries that last a lifetime — crafted with care,<br/>
         strength, and trust.
        </p>
        <p className="text-white text-sm my-10 w-full text-center ">
        At Sneha Mathil, we specialize in creating high-quality precast slab walls that combine durability with elegant design.
        With years of experience in the construction field, our team focuses on delivering reliable, affordable, and beautifully<br/>
        finished wall solutions for homes, institutions, and commercial spaces across Kerala.
        </p>
        <p className="text-white text-sm w-full text-center ">
        Our commitment goes beyond construction — we believe every wall should reflect protection, beauty, and pride.From<br/>
        site visit and measurement to installation and after-service, we ensure a seamless experience for every client.
        </p>
        <button className="mt-10 px-3 py-2 text-black bg-white  uppercase">
          Get a Quotation
        </button>
      </div>
    </section>
  {/* End WhoAre Section */}
  {/* Start Work Section */}
    <section  className="py-20 bg-[#F0FFFB] text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Works</h2>
      <p className='mb-10'>Explore our beautifully crafted precast walls — a blend of <br/> strength, style, and durability.</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {works.map((w, i) => (
          <div key={i} className="relative overflow-hidden shadow hover:shadow-lg ">
            <img src={w.img} alt={w.title} className="w-96 h-64 object-cover" />
            <h3 className="absolute inset-x-0 bottom-2 text-white font-medium uppercase">{w.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/gallery')} className="mt-6 px-10 py-1.5 bg-[#2F5D50] rounded-full text-white">
        SEE MORE
      </button>
    </section>
  {/* End Work Section */}
  {/* Start Testimonials Section */}
      <section className="py-20 text-center bg-[#F0FFFB]">
      <h2 className="text-3xl font-bold text-gray-800 mb-5 uppercase">
        What Is Says Our Clients 
      </h2>
      <p className='text-lg font-semibold mb-2'>Hear from our happy customers who trusted us with their  dream projects. Their <br/> words inspire us to keep building with passion and precision.</p>

      <div className="container mx-auto px-5 md:px-20  flex justify-center md:relative h-[80vh]">
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
                        ? "md:absolute md:top-20 md:left-30"
                        : "md:absolute md:bottom-40 md:right-30"
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
      <section  className="h-[90vh] px-20 bg-[#F0FFFB]  ">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 md:ps-36">Contact us</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-1  max-w-6xl mx-auto px-6 relative">
        {contacts.map((c, index) => (
          <div
            key={index}
            className={`bg-[#F0FFFB] text-center border border-gray-200 rounded shadow-sm hover:shadow-lg transition-all w-40 h-52 md:w-64 md:h-72 flex flex-col items-center py-10 space-y-4
              ${
                      index === 0 ? "absolute top-5 -left-10  md:top-8  md:left-20 " :index ===2?"absolute top-5 -right-14 md:top-8 md:right-50":
                        "absolute  left-1/3 -bottom-[30em] "
                    }
              `}
          >
            <img
              src={c.icon}
              alt={c.title}
              className=" w-5 h-5 md:w-12 md:h-12 object-contain mb-5"
            />
            <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
            <div className="text-sm leading-relaxed pt-10">
              {c.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  {/* End ContactUs Section */}
  
    </>
  )
}

export default Home
