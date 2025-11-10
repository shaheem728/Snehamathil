import {assets} from "../../assets/assets";

const Footer = () => {
  const mapLocation =()=>{
    window.open(
      "https://www.google.com/maps?q=Kakkanad,+Kochi,+Kerala,+India",
      "_blank"
    )
    }
  return (
    <footer className="bg-[#2F5D50] text-white px-10 py-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-evenly  gap-10 ">
        {/* Logo & Address */}
        <div className="col-span-1 text-center">
          <h2 className="text-5xl font-semibold rochester-regular">Snehamathil</h2>
          <p className="mt-2 text-sm  leading-relaxed">
            Kakkanad, Kochi <br /> Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">NAVIGATION</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">SERVICE</a></li>
            <li><a href="#" className="hover:underline">ABOUT</a></li>
            <li><a href="#" className="hover:underline">GALLERY</a></li>
            <li><a href="#" className="hover:underline">CONTACT</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">FOLLOW US</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <img src={assets.Intsta} className="w-4 h-4" alt="" /> INSTAGRAM
            </li>
            <li className="flex items-center gap-2">
              <img src={assets.Facebook} className="w-4 h-4" alt="" /> FACEBOOK
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={assets.F_Contact} alt="" className="w-4 h-4"/> +91 0000000000
            </li>
            <li className="flex items-center gap-2">
              <img src={assets.F_Mail} alt="" className="w-4 h-4"/> info@snehamathil.com
            </li>
            <li className="flex items-center gap-2">
              <img src={assets.F_Location} alt="" className="w-4 h-4"/> Kakkanad, Kochi Kerala India
            </li>
          </ul>
        </div>
        </div>

        {/* Map */}
             {/* Right Side: Map */}
          <div
          onClick={() => mapLocation()}
          className="relative shadow-2xl rounded-sm cursor-pointer w-[200px] h-[250px]"
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
            className="w-4 h-4 absolute left-1/2 top-5/12  -translate-x-1/2 -translate-y-1/2"
          />
        
          {/* Location text */}
          <p className="absolute   top-6/12  translate-x-1/12  text-black text-sm">
            Kakkanad, Kochi Kerala India
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mt-8" />
  
    </footer>
  );
};

export default Footer;
