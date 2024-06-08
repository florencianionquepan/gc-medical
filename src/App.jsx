import {HomePage} from './home/HomePage';
import {ContactPage} from './contact/ContactPage';
import {AboutPage} from './about/AboutPage';
import { Navigate, Route, Routes } from "react-router-dom";
import { MiNavbar } from "./assets/MiNavbar";
import { MiFooter } from './assets/MiFooter';

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
    <MiFooter/>
    </>
  )
}

