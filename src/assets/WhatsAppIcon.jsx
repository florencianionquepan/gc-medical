
export const WhatsAppIcon = () => {

  const iconStyle = {
    position: 'fixed',
    top: '160px', 
    right: '20px', 
    zIndex: '1000', 
    padding: '10px',
    borderRadius: '50%',
  };


  return (
    <div style={iconStyle}>
      <a href='https://wa.me/+542914372900' className="btn btn-dark rounded-circle ms-1" target="_blank" rel="noopener noreferrer">
      <div className="mt-1">
            <i className='bi bi-whatsapp'></i>
        </div>
      </a>
    </div>
  )
}
