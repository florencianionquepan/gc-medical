import {ImageComponent} from "../assets/utils/ImageComponent";

export const ItemCarousel = ({isActive, imagePath, imageAlt, hash, positionText, title, description1, description2}) => {

const dynamicClass=`position-absolute ${positionText} rounded bg-white bg-opacity-75 item-sm`

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''} position-relative`}>
      <ImageComponent hash={hash}
                      claseHash={"img-hash"}
                      path={imagePath} 
                      clase={"d-block w-100"}
                      imageAlt={imageAlt}/>
        {/* <div className={dynamicClass}>
            <h2 className="title-resp text-dark">{title}</h2>
            <p className="text-resp mb-0 text-dark">{description1}</p>
            <p className="text-resp mb-0 text-dark"> {description2} </p>      
        </div>  */}   
    </div>
  )
}
