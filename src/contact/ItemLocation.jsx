import { BigIcon } from "./BigIcon";

const locations=[
    { id: 1, location: 'Tres Arroyos' },
  { id: 2, location: 'Coronel Dorrego' },
  { id: 3, location: 'Pringles' },
  { id: 4, location: 'Pigüé' },
  { id: 5, location: 'Guaminí' },
  { id: 6, location: 'Pedro Luro' },
  { id: 7, location: 'Monte Hermoso' },
  { id: 8, location: 'Daireaux' },
  { id: 9, location: 'Bahía Blanca' },
  { id: 10, location: 'Puán' },
  { id: 11, location: 'Adolfo González Chávez' },
  { id: 12, location: 'Patagones' },
  { id: 13, location: 'Carhué' },
  { id: 14, location: 'Coronel Suárez' }
];


export const ItemLocation = () => {
  return (
    <>
        
        <div className="border rounded border-secondary border-3 position-relative pt-5">
            <BigIcon iconClass="bi bi-geo-alt-fill" link="https://maps.app.goo.gl/BLvJnbvKs3cv7ziA8"/>
            <p className="px-4 pt-3 mt-5">
                Podés encontrarnos en Belgrano 532 de Lunes a viernes de a 16.00hs en bahía blanca
            </p>
            <p className="px-4">
                Además, bridamos nuestros servicios a otras localidades:
            </p>
            <div className="d-flex justify-content-center">
                <ul className="list-group pb-3 text-start ms-5">
                    {locations.map(loc=>(
                        <li key={loc.id}
                            className="list-group-item border border-0 pb-0 ms-2">
                            <i className="bi bi-geo-fill" style={{ fontSize: '1rem', color: 'red' }}> </i> {loc.location}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}
