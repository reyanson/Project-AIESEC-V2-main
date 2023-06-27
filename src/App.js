import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Analytics from "./scenes/Analytics";
import Events from "./scenes/Events";
import Home from "./scenes/Home";
import Tracker from "./scenes/Tracker";
import LetterGenerate from "./scenes/LetterGenerate";
import KnowledgeHub from "./scenes/KnowledgeHub";
import Products from "./scenes/Products";
import Membership from "./scenes/Membership";
import Tasks from "./scenes/Tasks";
import Viewtask from "./scenes/Viewtask";
import Lhome from './Letter/components/Home';
import Letter from './Letter/components/Letter';
// import 'bootstrap/dist/css/bootstrap.min.css';

import PHome from './Profile/pages/Home';
import AddUser from './Profile/users/AddUser';
import EditUser from './Profile/users/EditUser';
import ViewUser from './Profile/users/ViewUser';

//Login import TG492
import Login from "./Login/login/Login";
import ResetPassword from "./Login/login/Resetpassword";
import VerifyEmail from "./Login/login/VerifyEmail";
import ResetPage from "./Login/login/ResetPage";





export default function App() {
  return(
    
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Home/>}></Route>
          <Route path="/tracker" exact element={<Tracker/>}></Route>
          <Route path="/analytics" exact element={<Analytics/>}></Route>
          <Route path="/events" exact element={<Events/>}></Route>
          {/* <Route path="/lettergenerate" exact element={<LetterGenerate/>}></Route> */}
          <Route path="/knowledgehub" exact element={<KnowledgeHub/>}></Route>
          <Route path="/products" exact element={<Products/>}></Route>
          <Route path="/membership" exact element={<Membership/>}></Route>
          <Route path="/tasks" exact element={<Tasks/>}></Route>
          <Route path="/Viewtask" exact element={<Viewtask/>}></Route>
          <Route exact path='/lettergenerate' element={<Lhome/>} />
          <Route exact path='/lettergenerate/review_letter' element={<Letter/>} />

          
        
          <Route exact path='/phome' element={<PHome/>} />
          <Route exact path='/adduser' element={<AddUser/>} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
          <Route exact path='/viewUser/:id' element={<ViewUser />} />
          {/* Login components TG492 */}
          <Route path="/" element= {<Login/>} />
             <Route path="/forgot" element={<ResetPassword />} />
             <Route path="/VerifyEmail" element={<VerifyEmail />} />
             <Route exact path="/resetpage" element={<ResetPage/>}/>

          


        </Routes>
      </BrowserRouter>
    </div>
  )
}