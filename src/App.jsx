import { AppRouter } from "./routes/AppRouter";
import { MiNavbar } from "./assets/MiNavbar";
import { MiFooter } from './assets/MiFooter';
import { WhatsAppIcon } from "./assets/WhatsAppIcon";


export const App = () => {
  return (
    <>
    <MiNavbar/>
      <AppRouter/>
      <WhatsAppIcon/>
    <MiFooter/>
    </>
  )
}

