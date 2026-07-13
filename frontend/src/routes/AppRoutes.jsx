import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Prediction from "../pages/Prediction";
import History from "../pages/History";

export default function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/prediction" element={<Prediction/>}/>

                <Route path="/history" element={<History/>}/>

            </Routes>

        </BrowserRouter>

    );

}