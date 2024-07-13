import items from './../assets/helpers/itemsLines';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarouselItemLine } from './CarouselItemLine';

export const CarouselLines = () => {

  return (
    <div className='row justify-content-center mx-xl-5'>
    <Swiper
        modules={[Pagination, Navigation]}
        breakpoints={{
            0:{
                slidesPerView:1
            },
            768:{
                slidesPerView:2,
                spaceBetween:15
            },
            992:{
                slidesPerView:3,
                spaceBetween:15
            }
        }}
        loop={true}
        pagination={{clickable:true}}
        spaceBetween={1}
        slidesPerView={3}
        >
            {items.map((i)=>(
                <SwiperSlide key={i.id}>
                        <div className='col mb-5'>
                            <CarouselItemLine imagePath={i.imagePath}
                                                text={i.linea}
                                                linePath={i.link}   
                                                />
                        </div>
                        
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
    
  )
}
