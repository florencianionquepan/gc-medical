import { Route, Routes } from 'react-router-dom'
import { ProductDetail } from '../products/ProductDetail'
import { ProductLinePage } from '../products/lines/ProductLinePage'
import { LinesPage } from '../products/lines/LinesPage'


export const ProductsRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LinesPage/>}/>
            <Route path="/:id" element={<ProductDetail/>}/>
            <Route path="linea/:linea" element={<ProductLinePage/>}/>
        </Routes>
    </>
  )
}
