import {BreakpointIndicator} from './../assets/utils/BreakpointIndicator'
import { ProductsSection } from './ProductsSection'
import { ContactSection } from './ContactSection'
import { AboutSection } from './AboutSection'
import { CarouselLines } from './carousel-lines/CarouselLines'

export const HomePage = () => {
  return (
    <>
    <BreakpointIndicator/>
    <div className='container-fluid'>
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
