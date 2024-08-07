export const BigIcon = ({iconClass, link}) => {
  return (
    <>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none btn-contact 
                                  text-dark">
        <div className="border border-gris border-5 rounded-circle w-50 mx-auto
        d-flex justify-content-center align-items-center
        position-absolute top-0 start-50 translate-middle bg-body btn-contact" 
        style={{ aspectRatio: '1 / 1', maxWidth: '170px', '@media (minWidth: 1250px)': ''}}>
            <i className={iconClass} style={{ fontSize: '400%', marginTop: '15px'}}></i>
        </div>
    </a>
    </>
  )
}
