import { createContext, useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import axios from "axios";
const GalleryContext = createContext()

export const ContextProvider = ({children})=>{
    const [galleryData,SetGalleryData] = useState([])
    const getGalleryItems =async()=>{
    try{
      const response = await axios.get(API_PATHS.GALLERY.GET_GALLERY,
        {
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
      SetGalleryData(response.data)
    }catch(error){
        console.log("Error fetching users",error)
      }
    }    

    return(
       <GalleryContext.Provider value={{galleryData,getGalleryItems}} > 
        {children}
       </GalleryContext.Provider>
    )
    
}

export default GalleryContext