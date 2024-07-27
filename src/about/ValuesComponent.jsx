

export const ValuesComponent = ({title,text}) => {
  return (
    <div className='col-12 col-sm-10 col-md-8 col-lg-4 border rounded border-gris border-5 p-2 m-2'>
        <div className="circle-container border-gris">
            <h5 className="rozha-one circle-title fs-5">{title}</h5>
        </div>
        <div>
            <p className="mb-1 fs-5">{text}</p>
        </div>
     
    </div>
  )
}
