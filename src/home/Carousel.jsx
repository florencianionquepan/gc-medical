import { useState } from 'react';
import "./home.css";
import { ItemCarousel } from './ItemCarousel';

const slides=[
  {
    id: 1,
    imagePath: 'img/home1.jpg',
    hash:'LKN-TW9i^+014;W?xuoc~pI;WB%2',
    imageDescription:'Imagen de portada 1',
    positionText:'top-50 start-0 p-2 p-lg-4 p-xxl-5 mt-0 mt-md-3 mt-xl-5 ms-4 ms-md-3 ms-lg-5',
    title: 'Bienvenido a GC Medical',
    description1:'Empresa dedicada a la provisión de prótesis e ',
    description2: 'insumos médicos de mediana y alta complejidad',
  },
  {
    id: 2,
    imagePath: 'img/home2.jpg',
    hash:'LJFQOe4p%gVp.AKmn2xuVrRhx^R-',
    imageDescription:'Imagen de portada 2',
    positionText:'top-50 end-0 p-2 p-md-3 p-lg-4 p-xxl-5 mt-0 mt-md-3 mt-xl-5 ms-4 ms-md-0 me-5',
    title: 'Nuestra Visión',
    description1:'Innovar y mejorar la salud global con productos de excelencia.',
  },
  {
    id: 3,
    imagePath: 'img/home3.jpg',
    hash:'LTMb6^~q,tXRtRs.s:RjofjtM{kC',
    imageDescription:'Imagen de portada 3',
    positionText:' top-50 start-0 p-2 p-lg-4 p-xxl-5 mt-md-3 mt-xl-5 ms-4 ms-md-3 ms-lg-5 me-5',
    title: 'Amplia variedad de Productos',
    description1:'Desde cardiología hasta oncología, cubrimos todas sus necesidades.',
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
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <ItemCarousel key={slide.id}
                            isActive={ index === activeIndex}
                            positionText={slide.positionText}
                            imagePath={slide.imagePath}
                            hash={slide.hash}
                            imageAlt={slide.imageDescription}
                            title={slide.title}
                            description1={slide.description1}
                            description2={slide.description2}
              />
            ))}
          </div>
        <button className="carousel-control-prev d-none d-sm-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next d-none d-sm-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
