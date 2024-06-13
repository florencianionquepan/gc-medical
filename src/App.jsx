import { AppRouter } from "./routes/AppRouter";
import { MiNavbar } from "./assets/MiNavbar";
import { MiFooter } from './assets/MiFooter';


export const App = () => {
  return (
    <>
    <MiNavbar/>
      <AppRouter/>
    <MiFooter/>
    </>
  )
}

