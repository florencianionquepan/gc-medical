import {ImageComponent} from "../assets/utils/ImageComponent";

export const ItemCarousel = ({isActive, imagePath, imageAlt, hash }) => {

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''} position-relative`}>
      <ImageComponent hash={hash}
                      claseHash={"d-block w-100 img-hash-supplier"}
                      path={imagePath} 
                      clase={"d-block w-100"}
                      imageAlt={imageAlt}/> 
    </div>
  )
}
