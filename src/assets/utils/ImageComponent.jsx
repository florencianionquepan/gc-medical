import { useEffect, useState } from "react"
import {BlurhashCanvas} from "react-blurhash";

export const ImageComponent = ({hash, claseHash, path, clase, imageAlt}) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img= new Image()
    img.onload = () =>{
      setImageLoaded(true);
    }
    img.src= path
  }, [path])


  return (
    <>
        {!imageLoaded && <div>
          <BlurhashCanvas
              hash={hash}
              punch={1} 
              className={claseHash}/>
        </div> }
        {imageLoaded && <img
            src={path}
            alt={imageAlt}
            className={clase}
        />}
    </>
  )
}
