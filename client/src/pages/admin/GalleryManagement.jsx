import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Plus, Trash2, Upload, X , Save ,Menu } from "lucide-react";
import Sidebar from "../../components/Sidebar";

const GalleryManagement = () => {
  const [isAdding, setIsAdding] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryItems = [
    {
      id: 1,
      title: "ELEGANT COMPOUND WALL DESIGNS",
      description:
        "The wall may be situated along a property line, a roadside, or an industrial area, possibly with a clear sky.",
      order: 1,
      image: assets.Gallery_1,
    },
    {
      id: 2,
      title: "ELEGANT COMPOUND WALL DESIGNS",
      description:
        "The wall may be situated along a property line, a roadside, or an industrial area, possibly with a clear sky.",
      order: 2,
      image: assets.Gallery_1,
    },
    {
      id: 3,
      title: "ELEGANT COMPOUND WALL DESIGNS",
      description:
        "The wall may be situated along a property line, a roadside, or an industrial area, possibly with a clear sky.",
      order: 3,
      image: assets.Gallery_1,
    },
    // add more items as needed
  ];

  return (
    <div className="relative flex min-h-screen bg-gray-50">
        
      {/* Sidebar */}
      {
        <>
        <div className="hidden md:flex">
           <Sidebar/>
        </div>
        <div className=" md:hidden absolute   left-0 top-0 ">
         {
            !isMenuOpen ?  <Sidebar/> : ''
         }   
        </div>
        </>
      }
      

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Gallery Management
          </h2>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="bg-[#204E43] text-white flex items-center px-4 py-2 rounded-lg hover:bg-[#1C463B] transition"
            >
            {isAdding ? (
                <>
                <X className="w-4 h-4 mr-1" /> Cancel
                </>
            ) : (
                <>
                <Plus className="w-4 h-4 mr-2" /> Add Image
                </>
            )}
            </button>

             {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#204E43] cursor-pointer  "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <Menu className="w-10" />
        </button>
        </div>

        {!isAdding ? (
          <>
            {/* Tabs */}
            <div className="flex space-x-3 mb-6">
              <button className="bg-[#3D6A5A] text-white font-semibold px-4 py-1 rounded-md text-sm">
                Uploaded
              </button>
              <button className="bg-[#CDEDE2] text-[#3D6A5A] font-semibold px-4 py-1 rounded-md text-sm">
                Drafts
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      order:{item.order}
                    </p>
                    <div className="flex space-x-4">
                      <button className="flex items-center bg-[#204E43] text-white text-xs px-3 py-1 rounded-md">
                         Edit <img src={assets.Edit} className="w-3 h-3 ml-1" />
                      </button>
                      <button className="flex items-center bg-red-600 text-white text-xs px-3 py-1 rounded-md">
                         Delete <Trash2 className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-gray-300 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Add New Image</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-700">Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"
                    />
                    <button
                      type="button"
                      className="bg-[#204E43] text-white px-3 rounded-md flex items-center"
                    >
                     Upload <Upload className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">
                  Description (optional)
                </label>
                <textarea className="w-full border  border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"></textarea>
              </div>

              <div>
                <label className="text-sm text-gray-700">Display Order</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex items-center bg-[#204E43] text-white px-4 py-2 rounded-md hover:bg-[#1C463B]"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Image
                </button>
                <button
                  type="button"
                  className="flex items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700"
                >
                 <Save color="#2C5F4F" className="w-4 h-4 mr-2" /> Save to draft
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryManagement;
