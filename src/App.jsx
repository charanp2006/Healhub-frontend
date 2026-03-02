import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Hospitals from './pages/Hospitals'
import HospitalProfile from './pages/HospitalProfile'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import Demo from './pages/Demo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingDemoButton from './components/FloatingDemoButton'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[3%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/hospital/:hospitalId' element={<HospitalProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
      <FloatingDemoButton />
    </div>
  )
}

export default App
