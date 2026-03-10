import { NavBar } from './components/Navbar'
// import { PricingTable } from './components/PricingTable';
// import { Footer } from './components/Footer'
import { SobreMi } from './components/SobreMi'
import { Experiencia } from './components/Experiencia';
import { Proyectos } from './components/Proyectos';
import { Tecnologias } from './components/Tecnologías';
import { FondoEstrellas } from './components/FondoEstrellas';
import { FondoSoleado } from './components/FondoSoleado';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }
  return (
    <main className='min-h-screen transition-colors duration-500'>
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        {theme==='dark' ? <FondoEstrellas/> : <FondoSoleado/>}
      </div>
      <>
        <NavBar theme={ theme } toggleTheme={ toggleTheme }/>
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