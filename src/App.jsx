import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { MiHeader } from './assets/MiHeader';
import {HomePage} from './home/HomePage';
import {ContactPage} from './contact/ContactPage';
import {AboutPage} from './about/AboutPage';
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
    <MiHeader/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="nosotros" element={ <AboutPage/> }/>
        <Route path="contacto" element={ <ContactPage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>                                                
      </Routes>
    </>
  )
}

