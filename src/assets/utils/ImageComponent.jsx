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
        <div style={{display: imageLoaded? 'none':'inline'}} >
          <BlurhashCanvas
              hash={hash}
              punch={1} 
              className={claseHash}/>
        </div> 
        <img
            src={path}
            alt={imageAlt}
            className={clase}
            style={{display: !imageLoaded? 'none':'inline'}}
        />
    </>
  )
}
