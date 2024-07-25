import { ProductsSection } from './ProductsSection'
import { ContactSection } from './ContactSection'
import { AboutSection } from './AboutSection'
import { CarouselLines } from './carousel-lines/CarouselLines'

export const HomePage = () => {
  return (
    <>
    <div className='container-fluid mt-5'>
      <CarouselLines/>
    </div>
    <div className='container-lg'>
      <ProductsSection/>
      <ContactSection/>
      <AboutSection/>
    </div>

    </>
  )
}
