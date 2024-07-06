import {BreakpointIndicator} from './../assets/utils/BreakpointIndicator'
import { Carousel } from './Carousel'
import { ProductsSection } from './ProductsSection'
import { ContactSection } from './ContactSection'
import { AboutSection } from './AboutSection'
import { CarouselLines } from './CarouselLines'

export const HomePage = () => {
  return (
    <>
    <BreakpointIndicator/>
    <div className='container-fluid'>
      <CarouselLines/>
    </div>
    <div className='container-lg'>
      <AboutSection/>
      <ProductsSection/>
      <ContactSection/>
    </div>

    </>
  )
}
