import React, { useState,useEffect } from "react";
import { assets } from "../../assets/assets";
import { Plus, Trash2, Upload, X , Save ,Menu } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";

const GalleryManagement = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingID, setEditingID] = useState(null);
  // Fetched items
  const [galleryItems, setGalleryItems] = useState([
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
  ]);

  // Fetch Editing items
  const fetchEditing = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/api/gallery/editing/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = res.data;

   // AUTO-FILL form fields
    setTitle(data.title);
    setImageURL(data.image);
    setDescription(data.description);
    setOrder(data.order);

  } catch (error) {
    toast.error("Failed to load gallery items");
  }
};
  // Add form fields
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState("");

  
// Fetch Gallery Items
useEffect(() => {
  fetchGallery();
}, []);

const fetchGallery = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${API_URL}/api/gallery/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setGalleryItems(res.data);
  } catch (error) {
    toast.error("Failed to load gallery items");
  }
};

//Add Image
const handleAddImage = async (e) => {
  e.preventDefault();

  if (!title || !imageURL) {
    toast.warning("Title and Image URL required");
    return;
  }

  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `${API_URL}/api/gallery/create/`,
      {
        title,
        description,
        image: imageURL,
        order,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    toast.success("Image added successfully!");

    // Update list
    fetchGallery();

    // Reset fields
    setTitle("");
    setImageURL("");
    setDescription("");
    setOrder("");

    setIsAdding(false);
  } catch (error) {
    toast("Failed to upload image");
  }
};

//Delete Image
const deleteImage = async (id) => {
  const token = localStorage.getItem("token");

  try {
    await axios.delete(`${API_URL}/api/gallery/delete/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Image deleted");
    fetchGallery();
  } catch (error) {
    toast.error("Delete failed");
  }
};

//UPDATE Items 
const handleUpdateImage = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  try {
    const res = await axios.put(
      `${API_URL}/api/gallery/update/${editingID}/`,
      {
        title,
        image: imageURL,
        description,
        order,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    toast.success("Gallery item updated!");

    setEditMode(false);
    setEditingID(null);

    fetchGallery();

    // Clear form
    setTitle("");
    setImageURL("");
    setDescription("");
    setOrder("");
    setIsAdding(false);
  } catch (error) {
    toast.error("Update failed");
  }
};

//Reset form
const resetForm = () => {
  setTitle("");
  setImageURL("");
  setDescription("");
  setOrder("");
  setEditingID(null);
  setEditMode(false);
  setIsAdding(false);
};


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
            onClick={() =>{setIsAdding(!isAdding),resetForm()}}
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
                      <button onClick={()=>{
                        fetchEditing(item.id);
                        setEditingID(item.id);
                        setEditMode(true);
                        setIsAdding(true);
                        setIsAdding(true);
                      }} 
                        className="flex items-center cursor-pointer bg-[#204E43] text-white text-xs px-3 py-1 rounded-md">
                         Edit <img src={assets.Edit} className="w-3 h-3 ml-1" />
                      </button>
                      <button 
                      onClick={() => deleteImage(item.id)}
                      className="flex items-center cursor-pointer bg-red-600 text-white text-xs px-3 py-1 rounded-md">
                         Delete <Trash2 className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-gray-300 p-5 rounded-xl shadow-md">
            <h3 className="text-xl py-2  font-bold">{editMode ? "Update Image" : "Add New Image"}</h3>
            <form className="space-y-4" onSubmit={editMode ? handleUpdateImage : handleAddImage}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm text-gray-700">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-700">Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imageURL}
                      onChange={(e) => setImageURL(e.target.value)}
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
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                className="w-full border  border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Display Order</label>
                <input
                  type="number"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#204E43] outline-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex items-center bg-[#204E43] text-white px-4 py-2 rounded-md hover:bg-[#1C463B]"
                >
                  <Plus className="w-4 h-4 mr-2" /> {editMode ? "Update Image" : "Add Image"}
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
