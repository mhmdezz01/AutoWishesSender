import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GetStarted from "./Pages/GetStarted";
import RateUs from  "./Pages/RateUs";
import Reviews from  "./Pages/Reviews";
import History from  "./Pages/History";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
function App(){
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
export default App;