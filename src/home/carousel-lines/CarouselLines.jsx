import items from '../../assets/helpers/itemsLines';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './swiper-custom.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarouselItemLine } from './CarouselItemLine';

export const CarouselLines = () => {

  return (
    <div className='row justify-content-center width-carousel mx-auto'>
    <Swiper
        modules={[Pagination, Navigation]}
        breakpoints={{
            0:{
                slidesPerView:1
            },
            825:{
                slidesPerView:2,
                spaceBetween:10
            },
            1250:{
                slidesPerView:3,
                spaceBetween:10
            }
        }}
        loop={true}
        pagination={{clickable:true}}
        navigation
        spaceBetween={1}
        slidesPerView={3}
        >
            {items.map((i)=>(
                <SwiperSlide key={i.id}>
                        <div className='col mb-5'>
                            <CarouselItemLine imagePath={i.imagePath}
                                                hash={i.hash}
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
