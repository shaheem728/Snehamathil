import { Link } from "react-router-dom";
import {assets} from "../../assets/assets";
import { Youtube } from 'lucide-react';
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
          <h2 className="text-3xl md:text-5xl font-semibold rochester-regular">Sajina Construction</h2>
          <p className="mt-2 text-sm  leading-relaxed">
            Kakkanad, Kochi <br /> Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">NAVIGATION</h3>
          <ul className="space-y-1 mt-5 text-[16px]">
            <li><Link to="/" className="hover:underline">SERVICE</Link></li>
            <li><Link to="/about"className="hover:underline">ABOUT</Link></li>
            <li><Link to="/gallery" className="hover:underline">GALLERY</Link></li>
            <li><Link to="/contact" className="hover:underline">CONTACT</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">FOLLOW US</h3>
          <ul className="space-y-2 text-[16px] mt-5">
            
            <li className="flex items-center gap-2">
             <a href="https://www.instagram.com/sajina_construction_?igsh=MTRhNmNtZ2x6Nms0bw==" className="flex items-center"> <img src={assets.Intsta} className="w-4 h-4 mr-1" alt="" /> INSTAGRAM </a>
            </li>
            
            <li className="flex items-center gap-2">
             <a href="https://www.facebook.com/share/p/1Bb2kigewn/" className="flex items-center"> <img src={assets.Facebook} className="w-4 h-4 mr-1" alt="" /> FACEBOOK </a>
            </li>
         
            <li className="flex items-center gap-2">
             <a href="https://youtube.com/@sajina_construction?si=zrwtEXfU8buVc80o" className="flex items-center"> <Youtube  color="#ffff"  className="w-4 h-4 mr-1" alt="" /> YOUTUBE </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">CONTACT US</h3>
          <ul className="space-y-2 text-[16px] mt-5">
            <li className="flex items-center gap-2">
              <img src={assets.F_Contact} alt="" className="w-4 h-4"/> +91 9656737558
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
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mt-8" />
  
    </footer>
  );
};

export default Footer;
