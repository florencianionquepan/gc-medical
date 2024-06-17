

export const LineComponent = ({linea}) => {
  return (
    <>
        <div className='row m-5 justify-content-center'>
            <div className='col-8 col-md-5 col-lg-3'>
                <img alt="imagen de linea" src={'/img/cardio.png'} className="rounded"/>
            </div>
            <div className="col-8 p-2 col-md-7 col-lg-7 bg-celeste rounded text-white">
                <h2> {linea} </h2>
                <p className="d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta ab illum obcaecati possimus voluptate quae aliquid, aliquam placeat? Pariatur officia voluptate aut? Inventore voluptas, aut illum recusandae consectetur excepturi.</p>
                <button className="btn btn-secondary"> Ver Productos </button>
            </div>
        </div>
    </>
  )
}
