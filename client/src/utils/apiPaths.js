export const BASE_URL = import.meta.env.VITE_BACKEND_URL

//utils/apiPaths.js
export const API_PATHS = {
     AUTH:{
        LOGIN:`${BASE_URL}/api/login/`,
    },
    GALLERY:{
        GET_GALLERY:`${BASE_URL}/api/gallery/`,
        CREATE_GALLERY:"/api/gallery/create/",
        DELETE_GALLERY:(id)=>`/api/gallery/delete/${id}/`,
        EDIT_GALLERY:(id)=>`/api/gallery/editing/${id}/`,
        UPDATE_GALLERY:(id)=>`/api/gallery/update/${id}/`,
    },
   

}