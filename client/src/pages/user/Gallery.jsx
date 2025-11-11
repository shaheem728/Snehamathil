import React, { useEffect, useState } from 'react'
import axios from "axios";
import PanoramaSlider from '../../components/PanoramaSlider'
import { useNavigate } from 'react-router-dom'
import { gallery } from '../../assets/assets';
const Gallery = () => {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalleryItems();
    
  }, []);

  const getGalleryItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/gallery/`);
      setGalleryData(response.data);  // store API response
      // if(response.data){
      //   setLoading(false)
      // }
    } catch (error) {
      console.error("Error fetching gallery data", error);
    } finally{
      setLoading(false)
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#F0FFFB] py-40 text-center">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold text-[#375E56] mb-4">
          Our Work Speaks for Itself
        </h2>

        <p className="text-[#375E56] md:w-[35%] font-semibold mx-auto mb-12">
          Discover the strength, beauty, and craftsmanship behind every Sneha
          Marts. Each wall is built with precision, care, and a promise of long
          lasting quality.
        </p>

        {/* Panorama Slider */}
        <div className="mb-10">
          <PanoramaSlider />
        </div>

        <div className="md:px-32">
          <h3 className="text-left text-2xl font-semibold text-gray-800 mb-8">
            Explore Our Works
          </h3>
  
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {/* {galleryData.map((item, index) => ( */}
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative mt-5 shadow-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}      // backend image URL
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <p className="absolute left-2 bottom-3 text-lg font-medium text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        
          {/* Contact Button */}
          <div className="mt-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#2F5D50] text-white px-6 py-2 rounded-full transition"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
