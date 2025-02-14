import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SideDrawer from './layout/SideDrawer'
import Home from './pages/Home'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { useDispatch } from 'react-redux';
import SubmitCommission from './pages/SubmitCommission';
import { fetchUser } from './store/slices/userSlice';
import HowItWorks from './pages/HowItWorks';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
   <Router>
    <SideDrawer/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/submit-commission' element={<SubmitCommission/>}></Route>
      <Route path='/how-it-works-info' element={<HowItWorks/>}></Route>
    </Routes>
    <ToastContainer position='top-right'/>
   </Router>
  )
}

export default App
