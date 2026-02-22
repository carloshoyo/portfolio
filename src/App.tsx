import { NavBar } from './components/Navbar'
// import { PricingTable } from './components/PricingTable';
// import { Footer } from './components/Footer'
import { SobreMi } from './components/SobreMi'
import { Experiencia } from './components/Experiencia';
import { Proyectos } from './components/Proyectos';
import { Tecnologias } from './components/Tecnologías';

export function App() {
  return (
    <main className='min-h-screen'>
      {/* <div className="hidden md:absolute top-50 left-30 w-32 h-32 bg-teal-400 rounded-full  filter blur-[100px] opacity-50"></div>
      <div className="hidden md:absolute top-100 left-150 w-32 h-32 bg-sky-400 rounded-full filter blur-[128px] opacity-50"></div>
      <div className="hidden md:absolute top-50 left-200 w-32 h-32 bg-rose-200 rounded-full filter blur-[128px] opacity-50"></div> */}
      <>
        <NavBar/>
        {/* <PricingTable/> */}
        <SobreMi/>  
        <Experiencia/>
        <Proyectos/>
        <Tecnologias/>
      </>
    </main>
  )
}

export default App;