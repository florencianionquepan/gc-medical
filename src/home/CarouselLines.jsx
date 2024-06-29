import { useState } from 'react';
import items from './../assets/helpers/itemsLines';
import './home.css';

export const CarouselLines = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleItems = () => {
        let visibleItems = [];
        for (let i = 0; i < 3; i++) {
          const index = (currentIndex + i) % items.length;
          visibleItems.push(items[index]);
        }
        return visibleItems;
    };

    const prevSlide = () =>{
        const newI = (currentIndex -1 + items.length) % items.length;
        setCurrentIndex(newI);
    }

    const nextSlide = () =>{
        const newI = (currentIndex+1) % items.length;;
        setCurrentIndex(newI);
    }


  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="false">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="row mx-5 justify-content-center">
                {getVisibleItems().map((item, index) => (
                <div className="col-3" key={index}>
                    <div className="card categoria">
                    <img src={item.imagePath} className='w-100' alt={item.linea} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.linea}</h5>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
  )
}
