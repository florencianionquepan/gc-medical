import { useState } from 'react';
import items from './../assets/helpers/itemsLines';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CarouselLines = () => {

  return (
    <div className='row justify-content-center mx-xl-5'>
    <Swiper
        modules={[Pagination, Navigation]}
        breakpoints={{
            320:{
                slidesPerView:1
            },
            576:{
                slidesPerView:2,
                spaceBetween:15
            },
            768:{
                slidesPerView:3,
                spaceBetween:15
            }
        }}
        loop={true}
        pagination={{clickable:true}}
        className='lg:max-w-[90%]'
        spaceBetween={1}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((i)=>(
                <SwiperSlide key={i.id}>
                        <div className='col position-relative mb-3'>
                            <div className='card border-0'>
                                <img className='d-block w-75 rounded mx-auto' src={i.imagePath} alt={i.linea}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-dark">{i.linea}</h5>
                                </div>
                            </div>
                        </div>
                        
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
    
  )
}
