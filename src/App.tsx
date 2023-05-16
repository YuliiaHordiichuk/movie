import { Header, Footer } from "./components/index.d";
import { Outlet } from "react-router-dom";

export function App() {
  return <>
    <Header/>
    <main>
      <Outlet />
    </main>
    <Footer/> 
  </>;
}


