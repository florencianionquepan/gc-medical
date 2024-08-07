import { Route, Routes } from 'react-router-dom'
import { ProductDetail } from '../products/ProductDetail'
import { ProductLinePage } from '../products/lines/ProductLinePage'
import { LinesPage } from '../products/lines/LinesPage'
import { ProductPage } from '../products/ProductPage'


export const ProductsRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/:id" element={<ProductDetail/>}/>
            <Route path="linea/:linea" element={<ProductLinePage/>}/>
        </Routes>
    </>
  )
}
