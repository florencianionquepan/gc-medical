

export const ItemCarousel = ({isActive, imagePath, image, positionText, title, description1, description2}) => {

const dynamicClass=`position-absolute ${positionText} p-2 p-xl-4 p-xxl-5 rounded mt-5 ms-3 ms-lg-5 bg-white bg-opacity-75`

  return (
    <div className={`carousel-item ${isActive ? 'active' : ''} position-relative`}>
        <img src={imagePath} className="d-block w-100" alt={image}/>
        <div className={dynamicClass}>
            <h2 className="text-resp">{title}</h2>
            <p className="text-resp mb-0">{description1}</p>
            <p className="text-resp"> {description2} </p>      
        </div>    
    </div>
  )
}
