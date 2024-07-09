

export const ValuesComponent = ({title,text}) => {
  return (
    <div className='col-10 col-sm-8 col-md-4 col-xxl-2 border rounded border-gris border-5 p-2 m-2'>
        <div className="circle-container border-gris">
            <h5 className="rozha-one circle-title fs-6">{title}</h5>
        </div>
        <div>
            <p className="mb-1">{text}</p>
        </div>
     
    </div>
  )
}
