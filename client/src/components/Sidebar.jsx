import { LogOut } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate()
  return (
     <aside className="w-48 md:w-64 min-h-screen bg-[#204E43] text-white flex flex-col justify-between py-6">
        <div>
          <div className="px-6 mb-8">
            <h1 className="text-xl font-semibold">Snehamathil</h1>
            <p className="text-sm text-gray-300">Admin Panel</p>
          </div>
          <nav className="flex flex-col space-y-1">
            <button className="flex items-center text-sm px-6 py-3 bg-white/10">
              <img
                src={assets.Gallery}
                alt="Gallery"
                className="w-5 h-5 mr-3"
              />
              Gallery Management
            </button>
          </nav>
        </div>

        <button onClick={()=>{navigate('/admin'),localStorage.removeItem("token")}} className="flex ms-4 items-center px-3 md:px-6 py-3 bg-white/10 w-1/2 rounded-lg transition text-sm">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </button>
      </aside>
  )
}

export default Sidebar
