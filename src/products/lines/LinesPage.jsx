import { LineComponent } from "./LineComponent"
import {BreakpointIndicator} from './../../assets/utils/BreakpointIndicator';
import items from './../../assets/helpers/itemsLines';

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
