import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './lines.css';


export const LineComponent = ({linea, imagePath, link}) => {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  const handleImageLoad = () => {
    if (imgRef.current && window.innerWidth>=768 ) {
      setImgHeight(imgRef.current.clientHeight);
    }
  };

  return (
    <>
        <div className='row m-5 justify-content-center align-items-center'>
            <div className='col-8 col-sm-6 col-md-5 col-lg-3 d-flex justify-content-center rounded p-0 mx-2 me-md-3 me-lg-4'>
                <img 
                alt="imagen de linea" 
                src={imagePath} 
                className="rounded img-fluid w-custom"
                ref={imgRef}
                onLoad={handleImageLoad}
                />
            </div>
            <div className="col-8 col-sm-6 col-md-6 col-lg-7 bg-celeste rounded text-dark text-center text-sm-start p-2 py-sm-4 py-md-2" 
                  style={{ minHeight: imgHeight }}>
                <h2 className="mt-3"> {linea} </h2>
                <p className="d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta ab illum obcaecati possimus </p>
                <div className="text-end me-5">
                  <Link className="btn btn-secondary" to={link}> Ver Productos </Link>
                </div>
                
            </div>
        </div>
    </>
  )
}
