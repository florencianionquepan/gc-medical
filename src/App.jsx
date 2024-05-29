import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {HomePage} from './home/HomePage';
import {ContactPage} from './contact/ContactPage';
import {AboutPage} from './about/AboutPage';
import { Navigate, Route, Routes } from "react-router-dom";
import { MiNavbar } from "./assets/MiNavbar";

export const App = () => {
  return (
    <>
    <MiNavbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="nosotros" element={ <AboutPage/> }/>
        <Route path="contacto" element={ <ContactPage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>                                                
      </Routes>
    </>
  )
}

