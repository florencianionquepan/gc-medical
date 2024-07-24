import { useState } from 'react';
import "./home.css";
import { ItemCarousel } from './ItemCarousel';

const slides=[
  {
    id: 1,
    imagePath: 'img/supplier/productos1.webp',
    hash:'L58h|MQ+00t.HXH?yZ%hRix]%gM|',
    imageDescription:'Imagen de portada 1'
  },
  {
    id: 2,
    imagePath: 'img/supplier/productos2.webp',
    hash:'LYGSu?M{f+$%pfE3WXxCcENcoIWA',
    imageDescription:'Imagen de portada 2'
  },
  {
    id: 3,
    imagePath: 'img/supplier/productos3.webp',
    hash:'LGL}Q:]yy9OrGa%gZ$IA_L%0IAoe',
    imageDescription:'Imagen de portada 3'
  },
]

export const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>{
    setActiveIndex((prevIndex)=> (prevIndex === 0 ? slides.length -1 : prevIndex -1 ))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <ItemCarousel key={slide.id}
                            isActive={ index === activeIndex}
                            imagePath={slide.imagePath}
                            hash={slide.hash}
                            imageAlt={slide.imageDescription}
              />
            ))}
          </div>
      </div>
    </>
  )
}
