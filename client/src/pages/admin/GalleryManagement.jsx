import React, { useState,useEffect,useContext } from "react";
import { assets } from "../../assets/assets";
import { Plus, Trash2, Upload, X , Save ,Menu } from "lucide-react";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import axiosInstance from "../../utils/axios";
import { API_PATHS } from "../../utils/apiPaths";
import  GalleryContext  from "../../context/GalleryContext";
const GalleryManagement = () => {
  const {galleryData,getGalleryItems} = useContext(GalleryContext)
  const [isAdding, setIsAdding] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [uploadImage,setUploadImage] = useState('');


// Add form fields
const [title, setTitle] = useState("");
const [imageURL, setImageURL] = useState("");
const [description, setDescription] = useState("");
const [order, setOrder] = useState("");
const [draft,setDraft] = useState(false)



// Fetch Gallery Items
useEffect(() => {
  getGalleryItems();
}, []);

//Reset form
const resetForm = () => {
  setTitle("");
  setImageURL("");
  setDescription("");
  setOrder("");
  setEditingID(null);
  setEditMode(false);
  setUploadImage("")
  setDraft(false)
};

//Add Image
const handleAddImage = async (e) => {
  e.preventDefault();

  if (!title || !imageURL) {
    toast.warning("Title and Image URL required");
    return;
  }
  try {
    const res = await axiosInstance.post(API_PATHS.GALLERY.CREATE_GALLERY,
      {
        title,
        description,
        image: uploadImage,
        order,
        is_draft:draft,
      }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    );

    toast.success("Image added successfully!");

    // Update list
     getGalleryItems();
     resetForm()
     setIsAdding(false)
 
  } catch (error) {
    toast("Failed to upload image");
  }
};

// Fetch Editing items
const fetchEditing = async (Id) => {
try {
  const res = await axiosInstance.get(API_PATHS.GALLERY.EDIT_GALLERY(Id));
  const data = res.data;
  // AUTO-FILL form fields
  setTitle(data.title);
  setImageURL(data.image);
  setDescription(data.description);
  setOrder(data.order);
} catch (error) {
  toast.error("Failed to load gallery item");
}
};

//Delete Image
const deleteImage = async (Id) => {
  try {
    await axiosInstance.delete(API_PATHS.GALLERY.DELETE_GALLERY(Id),);
    toast.success("Image deleted");
     getGalleryItems();
  } catch (error) {
    toast.error("Delete failed");
  }
};

//UPDATE Items 
const handleUpdateImage = async (e,id) => {
  e.preventDefault()
  // Use id directly, not editingID
  const updateId = id || editingID;

  if (!updateId) {
    toast.error("No item selected for update!");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("order", order);
  formData.append("is_draft", draft);

  if (uploadImage) {
    formData.append("image", uploadImage ? uploadImage : imageURL);
  }

  try {
    const res = await axiosInstance.patch(
      API_PATHS.GALLERY.UPDATE_GALLERY(updateId),
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    toast.success("Updated successfully!");
    getGalleryItems();
    resetForm();
    setIsAdding(false)

  } catch (err) {
    toast.error("Update failed");
  }
};





function handleImage(e) {
  const file = e.target.files[0];
  console.log("file=",file)
  if (file) {
    setImageURL(URL.createObjectURL(file)); // for preview
    setUploadImage(file); // store file object
  } else {
    console.log("No file selected");
  }
}
const draftItems = galleryData.filter(item => item.is_draft === true);
const publishedItems = galleryData.filter(item => item.is_draft === false);

  return (
    <div className="relative w-full flex min-h-screen bg-gray-50">
      <input type='file' accept='image/*' hidden id='inputImg' onChange={handleImage}  />  
       {/* SIDEBAR */}
       {/* SIDEBAR (Desktop) */}
<div className="hidden md:flex">
  <Sidebar />
</div>

{/* Mobile Sidebar */}
  <div
    className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Click outside to close */}
    <div
      className="absolute inset-0  bg-opacity-50"
      onClick={() => setIsMenuOpen(false)}
    ></div>

    {/* Sidebar Panel */}
    <div className="absolute left-0 top-0 bottom-0 w-64  shadow-lg overflow-y-auto">
      <Sidebar />
    </div>
  </div>
      {/* Main Content */}
      <main className="flex-1 p-2 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
            Gallery Management
          </h2>
          <button
            onClick={() =>{setIsAdding(!isAdding),resetForm()}}
            className="bg-[#204E43] cursor-pointer text-sm md:text-lg text-white flex items-center px-4 py-2 rounded-lg hover:bg-[#1C463B] transition"
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
         className="md:hidden text-[#204E43] cursor-pointer z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <Menu className="w-10" />
        </button>
        </div>

        {!isAdding ? (
          <>
            {/* Tabs */}
            <div className="flex space-x-3 mb-6">
              <button onClick={()=>setIsDraft(false)} className={`${isDraft?' bg-[#CDEDE2] text-[#3D6A5A]':'bg-[#3D6A5A] text-white'}  text-[#3D6A5A] cursor-pointer font-semibold px-4 py-1 rounded-md text-sm`}>
                Uploaded
              </button>
              <button onClick={()=>{setIsDraft(true);getGalleryItems()}} className={`${isDraft?'bg-[#3D6A5A] text-white':'bg-[#CDEDE2] text-[#3D6A5A]'} cursor-pointer font-semibold px-4 py-1 rounded-md text-sm`}>
                Drafts
              </button>
            </div>
            {
              isDraft ?<> 
                 {/* Drafts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {draftItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#E8FFF7] relative  shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="py-2">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      order:{item.order}
                    </p>
                    </div>
                    <div className="flex absolute bottom-2 space-x-4">
                      <button onClick={()=>{
                        fetchEditing(item.id);
                        setEditingID(item.id)
                        setEditMode(true);
                        setIsAdding(true);
                      }} 
                        className="flex items-center cursor-pointer bg-[#204E43] text-white text-xs px-3 py-1 rounded-md">
                         Edit <img src={assets.Edit} className="w-3 h-3 ml-1" />
                      </button>
                     <button
                      onClick={async (e) => {
                        e.preventDefault();
                        setEditingID(item.id);
                        setDraft(false);

                        await fetchEditing(item.id);
                        await handleUpdateImage(e, item.id);
                      }}
                      className="flex items-center cursor-pointer bg-[#0234BD] text-white text-xs px-3 py-1 rounded-md"
                    >
                      Publish <Upload className="ml-1 w-4 h-4" />
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
            </div> </>  :
             <>
            {/* Gallery Grid */}
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {publishedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#E8FFF7] relative w-96 md:w-full mx-auto shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="py-2">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      order:{item.order}
                    </p>
                    </div>
                    <div className="flex absolute bottom-2 space-x-4">
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
            }
           
          </>
        ) : (
          <div className="bg-white border border-gray-300 p-5 rounded-xl shadow-md">
            <h3 className="text-xl py-2  font-bold">{editMode ? "Update Image" : "Add New Image"}</h3>
            <form className="space-y-4"
                onSubmit={(e) =>
                  editMode 
                    ? handleUpdateImage(e, editingID) 
                    : handleAddImage(e)
                }>
              <div className="flex flex-col md:flex-row gap-4">
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
                     onClick={()=>{
                    document.getElementById("inputImg")?.click()
                  }}
                      type="button"
                      className="bg-[#204E43] cursor-pointer text-white px-3 rounded-md flex items-center"
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
                  className="flex cursor-pointer items-center bg-[#204E43] text-white px-4 py-2 rounded-md hover:bg-[#1C463B]"
                >
                  <Plus className="w-4 h-4 mr-2" /> {editMode ? "Update Image" : "Add Image"}
                </button>
                <button
                 onClick={()=>setDraft(true)}
                  type="submit"
                  className="flex cursor-pointer items-center bg-gray-100 px-4 py-2 rounded-md text-gray-700"
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
