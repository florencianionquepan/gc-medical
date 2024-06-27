import { LineComponent } from "./LineComponent"
import {BreakpointIndicator} from './../../assets/BreakpointIndicator';

const items=[
  { id: 21, imagePath:'./img/cardio.png', linea: 'Tratamiento de heridas', link: '/linea/heridas', bg:'bg-celeste', orderText:''},
  { id: 22, imagePath:'./img/cardio.png', linea: 'Oncología', link: '/linea/oncologia',bg:'bg-gris', orderText:'order-md-first'},
  { id: 23, imagePath:'./img/cardio.png', linea: 'Urología', link: '/linea/urologia',bg:'bg-azul', orderText:''},
  { id: 24, imagePath:'./img/cardio.png', linea: 'Diabetes', link: '/linea/diabetes',bg:'bg-celeste', orderText:'order-md-first'},
  { id: 25, imagePath:'./img/cardio.png', linea: 'Neurología', link: '/linea/neurologia',bg:'bg-gris', orderText:'' },
  { id: 26, imagePath:'./img/cardio.png', linea: 'Cardiologia', link: '/linea/cardiologia',bg:'bg-azul', orderText:'order-md-first' },
  { id: 28, imagePath:'./img/cardio.png', linea: 'Gastroenterología', link: '/linea/gastroenterologia', bg:'bg-gris', orderText:''},
  { id: 29, imagePath:'./img/cardio.png', linea: 'Cirugia General', link: '/linea/cirugia',bg:'bg-celeste', orderText:''},
]

export const LinesPage = () => {
  return (
    <>
      <BreakpointIndicator/>
      <div className="container-md">
        {items.map((i)=>(
          <LineComponent
            key={i.id}
            linea={i.linea}
            imagePath={i.imagePath}
            link={i.link}
            bg={i.bg}
            orderText={i.orderText}
          />
        )
      )}
      </div>
    </>
    
  )
}
