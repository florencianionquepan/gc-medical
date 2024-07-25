import { Link } from 'react-router-dom';
import './itemLine.css';
import { ImageComponent } from '../../assets/utils/ImageComponent';

export const CarouselItemLine = ({imagePath,hash,text,linePath}) => {
  return (
    <>
    <Link to={`productos/${linePath}`} className="card card-line p-4 mx-auto position-relative border-0 mx-4 my-3" 
        style={{width: '20rem', overflow:'hidden'}}>
        <div className='box-custom'>
            <div className='border rounded-circle shadow-custom'>
                <div className='rounded-circle border border-5 border-white'>
                    <ImageComponent 
                        hash={hash}
                        claseHash={'card-img-top rounded-circle border border-gris-12'}
                        path={imagePath}
                        clase={'card-img-top rounded-circle border border-gris-12'}
                        imageAlt={text}
                        />
                </div>
            </div>
        </div>
        <div className="card-body bg-naranja title-line-custom" style={{zIndex:10}}>
            <h6 className="card-title text-end text-white rozha-one mb-0 text-decoration-none fs-6">
                {text}
            </h6>
        </div> 
    </Link>
    
    </>
    
  )
}