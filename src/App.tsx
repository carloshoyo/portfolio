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
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { DARK_QUERY, MOBILE_QUERY, persistTheme, resolveTheme, type Theme } from './theme';

export function App() {
  const [theme, setTheme] = useState<Theme>(resolveTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const queries = [window.matchMedia(MOBILE_QUERY), window.matchMedia(DARK_QUERY)];
    const sync = () => setTheme(resolveTheme());

    queries.forEach(query => query.addEventListener('change', sync));
    return () => queries.forEach(query => query.removeEventListener('change', sync));
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const next: Theme = prevTheme === 'dark' ? 'light' : 'dark';
      persistTheme(next);
      return next;
    });
  }
  return (
    <main className='min-h-screen transition-colors duration-500'>
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        {theme==='dark' ? <FondoEstrellas/> : <FondoSoleado/>}
      </div>
      <NavBar theme={ theme } toggleTheme={ toggleTheme }/>
      <div className='px-10'>        
        {/* <PricingTable/> */}
        {/* <SobreMi/> */}
        <Hero/>
        <Proyectos theme={ theme }/>
        <Experiencia/>
        <Tecnologias theme={ theme }/>
      </div>
      <Footer/>
    </main>
  )
}

export default App;