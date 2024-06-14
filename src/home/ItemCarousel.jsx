

export const ItemCarousel = ({isActive, imagePath, image, positionText, title, description1, description2}) => {

const dynamicClass=`position-absolute ${positionText} rounded bg-white bg-opacity-75 item-sm`

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''} position-relative`}>
        <img src={imagePath} className="d-block w-100" alt={image}/>
        <div className={dynamicClass}>
            <h2 className="title-resp text-dark">{title}</h2>
            <p className="text-resp mb-0 text-dark">{description1}</p>
            <p className="text-resp mb-0 text-dark"> {description2} </p>      
        </div>    
    </div>
  )
}
