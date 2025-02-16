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
import About from './pages/About';
import { getAllAuctionItems } from './store/slices/auctionSlice';
import { fetchLeaderboard } from './store/slices/userSlice';
import LeaderboardPage from './pages/LeaderboardPage';
import Auctions from './pages/Auctions';
import AuctionItem from './pages/AuctionItem';
import CreateAuction from './pages/CreateAuction';
import ViewMyAuction from './pages/ViewMyAuction';
import ViewAuctionDetails from './pages/ViewAuctionDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
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
      <Route path='/about' element={<About/>}></Route>
      <Route path='/leaderboard' element={<LeaderboardPage/>}></Route>
      <Route path='/auctions' element={<Auctions/>}></Route> 
      <Route path='/auction/item/:id' element={<AuctionItem/>}></Route> 
      <Route path='/create-auction' element={<CreateAuction/>}></Route>
      <Route path='/view-my-auctions' element = {<ViewMyAuction/>}></Route>
      <Route path='/auction/details/:id' element = {<ViewAuctionDetails/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/me' element={<UserProfile/>}></Route> 
    </Routes>
    <ToastContainer position='top-right'/>
   </Router>
  )
}

export default App
