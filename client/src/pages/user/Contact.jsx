import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
    const mapLocation =()=>{
    window.open(
      "https://www.google.com/maps?q=Kakkanad,+Kochi,+Kerala,+India",
      "_blank"
    )
    }
  return (
     <div className="flex flex-col bg-[#F0FFFB]  ">
      {/* Start Banner Section */}
      <section
        className="relative h-[600px]  bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${assets.Home})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            We’re Here to Help You Build Stronger Boundaries
          </h2>
          <p className="text-lg md:text-xl mb-6  md:px-20">
            Whether you’re looking for a new Slab Wall construction, custom wall
            design, or just a site visit & quotation, our team is ready to
            assist you with expert support and transparent pricing.
          </p>
          <button onClick={()=>document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
          className="bg-[#2F5D50] cursor-pointer text-white px-6 py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </section>
       {/* End Banner Section */}

      {/* Contact Info Section */}
      <section id='contact' className='flex justify-center items-center py-20'>
      <div className="bg-[#D9FFF4] w-[90%] rounded-3xl  py-10 md:px-20 flex flex-col md:flex-row items-center gap-5 justify-between ">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col text-start space-y-5 ">
          <h3 className="font-bold text-xl  text-[#2F5D50]">Get touch with us</h3>

          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img src={assets.Mail_Icon} className="w-5 h-5 " />
              <span>info@snehamathil.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={assets.Contact_Icon} className="w-5 h-5 " />
              <span>+91 9656737558</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={assets.Location_Icon}className="w-5 h-5 " />
              <span>Kakkanad, Kochi Kerala India</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-xl mb-2 text-[#2F5D50]">Follow Us</h4>
            <div className="flex flex-col space-y-4">
              <a href="https://www.instagram.com/sajina_construction_?igsh=MTRhNmNtZ2x6Nms0bw==" className="flex items-center space-x-2 text-[#2F5D50]">
                <img src={assets.C_Insta} className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/share/p/1Bb2kigewn/" className="flex items-center space-x-2 text-[#2F5D50]">
                <img src={assets.C_Facebook} className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Map */}
         <div
  onClick={() => mapLocation()}
  className="relative shadow-2xl rounded-3xl cursor-pointer h-[250px] w-[300px] md:w-[500px] md:h-[350px]"
  style={{
    backgroundImage: `url(${assets.Map})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>

  {/* Location icon */}
  <img
    src={assets.Location_Icon}
    alt="Location Icon"
    className="w-8 h-8 absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2"
  />

  {/* Location text */}
   <h3
  className="
    absolute 
    left-1/2 
    top-[55%] 
    -translate-x-1/2 
    -translate-y-1/2 
    text-sm 
    md:text-xl  
    text-[#2F5D50] 
    font-bold
    text-center
    w-full
    leading-tight
  "
>
  Kakkanad, Kochi Kerala India
</h3>


</div>

    </div>
    </section>
    {/* End Contact Info Section */}
    </div>
  )
}

export default Contact
