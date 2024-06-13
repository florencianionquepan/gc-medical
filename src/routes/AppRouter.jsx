import { Navigate, Route, Routes } from "react-router-dom";
import {HomePage} from './../home/HomePage';
import {ContactPage} from './../contact/ContactPage';
import {AboutPage} from './../about/AboutPage';
import { ProductPage } from './../products/ProductPage';
import { ProductsRouter } from "./ProductsRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="productos/*" element={ <ProductsRouter/> }/>
        <Route path="nosotros" element={ <AboutPage/> }/>
        <Route path="contacto" element={ <ContactPage/> }/>
        <Route path="/*" element={ <Navigate to="/"/> }/>                                                
      </Routes>
    </>
  )
}
