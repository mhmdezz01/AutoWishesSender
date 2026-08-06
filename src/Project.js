import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GetStarted from "./pages/GetStarted";
import RateUs from  "./pages/RateUs";
import Reviews from  "./pages/Reviews";
import History from  "./pages/History";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
function Project(){
    return(
        <div style={{fontFamily:"Times"}}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/get-started" element={<GetStarted/>}/>
                <Route path="/rate-us" element={<RateUs/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
export default Project;