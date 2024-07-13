import { Link } from 'react-router-dom';
import './itemLine.css';

export const CarouselItemLine = ({imagePath,text,linePath}) => {
  return (
    <>
    <Link to={`productos/${linePath}`} className="card card-line p-4 mx-auto position-relative border-0 mx-4 my-3" 
        style={{width: '20rem', overflow:'hidden'}}>
        <div className='box-custom'>
            <div className='border rounded-circle shadow-custom'>
                <div className='rounded-circle border border-5 border-white'>
                    <img src={imagePath} className="card-img-top rounded-circle border border-gris-12" alt={text}/>
                </div>
            </div>
        </div>
        <div className="card-body bg-naranja title-line-custom" style={{zIndex:10}}>
            <h5 className="card-title text-end text-black rozha-one mb-0 text-decoration-none">
                {text}
            </h5>
        </div> 
    </Link>
    
    </>
    
  )
}
