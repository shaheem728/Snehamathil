import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/user/Home";
import Gallery from "./pages/user/Gallery";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Login from "./pages//admin/Login";
import GalleryManagement from "./pages/admin/GalleryManagement";

function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        {/* User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<GalleryManagement />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
