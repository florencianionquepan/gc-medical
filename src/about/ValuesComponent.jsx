

export const ValuesComponent = ({title,text}) => {
  return (
    <div className='col-10 col-md-2 border rounded border-gris border-3 p-2 mx-2'>
        <div className="circle-container border-gris">
            <h5 className="rozha-one circle-title">{title}</h5>
        </div>
        <div>
            <p>{text}</p>
        </div>
     
    </div>
  )
}
