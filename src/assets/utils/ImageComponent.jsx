import { useEffect, useState } from "react"
import {BlurhashCanvas} from "react-blurhash";
import "./imageComponent.css";

export const ImageComponent = ({hash, claseHash, path, clase, imageAlt}) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  const [hideBlurhash, setHideBlurhash] = useState(false);

  useEffect(() => {
    const img= new Image()
    img.onload = () =>{
      setImageLoaded(true);
      setTimeout(() => setHideBlurhash(true), 1000); 
    }
    img.src= path
  }, [path])


  return (
    <>
      {!hideBlurhash &&
        <div className={`${imageLoaded? 'no-blurhash':'img-blur'}`} >
          <BlurhashCanvas
              hash={hash}
              punch={1} 
              className={claseHash}/>
        </div>}
        { imageLoaded && (
            <img
            src={path}
            alt={imageAlt}
            className={clase}
        />)}
    </>
  )
}
