import {  Footer, Header } from '../blocks/index.d'; 

interface LayoutProps {
  children?: JSX.Element
}
export function Layout({ children }: LayoutProps) {
  return <>
    <Header></Header>
    <main>{ children }</main>
    <Footer></Footer> 
  </>; 
}