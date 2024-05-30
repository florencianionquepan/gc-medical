export const BigIcon = ({iconClass}) => {
  return (
    <>
        <div className="border border-secondary border-3 rounded-circle w-50 mx-auto
        d-flex justify-content-center align-items-center
        position-absolute top-0 start-50 translate-middle bg-body" 
        style={{ aspectRatio: '1 / 1', maxWidth: '170px', '@media (min-width: 1250px)': ''}}>
        <i className={iconClass} style={{ fontSize: '400%'}}></i>
        </div>
    </>
  )
}
