import { NavBar } from './components/Navbar'
import { Proyectos } from './app/Proyectos';
import { Tecnologias } from './app/Tecnologías';
import { FondoEstrellas } from './components/FondoEstrellas';
import { FondoSoleado } from './components/FondoSoleado';
import { useState } from 'react';
import { useEffect } from 'react';
import { Hero } from './app/Hero';
import { Footer } from './app/Footer';
import { DARK_QUERY, MOBILE_QUERY, persistTheme, resolveTheme, type Theme } from './theme';
import { SectionWithTimeLine, type Points } from './app/SectionWithTimeLine';
import { BiSolidBriefcaseAlt2 } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';

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

  const jobs: Points[] = [
        {
            title: "Full-Stack Freelance Developer",
            period: "Aug. 2026 - Present",
            desc: "Building and shipping full-stack web and mobile applications for clients, from requirements gathering to deployment. Working with React, TypeScript and Node across several concurrent projects.",
            color: "[#CCD5AE]/30"
        },
        {
            title: "Constella Intelligence",
            period: "Feb. 2026 - Aug. 2026",
            desc: "Developed internal tools to solve operational bottlenecks for the team, and automated recurring workflows using AI agents — reducing manual effort on repetitive tasks.",
            color: "[#CCD5AE]/30"
        },
    ];
  const education: Points[] = [
        {
            title: "Computer Engineering. Mention in Software Engineering",
            period: "Sep. 2021 - Jun. 2026",
            desc: "University of Granada",
            color: "[#CCD5AE]/30"
        },
        {
            title: "Computer Engineering. Erasmus +",
            period: "Sep. 2024 - Jun. 2025",
            desc: "Mendel University in Brno",
            color: "[#CCD5AE]/30"
        },
    ];
    
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
        <SectionWithTimeLine title='Experience' points={jobs} icon={<BiSolidBriefcaseAlt2 className="w-7 h-7"/>}/>
        <SectionWithTimeLine title='Education' points={education} icon={<FaGraduationCap className='w-7 h-7'/>}/>
        <Tecnologias theme={ theme }/>
      </div>
      <Footer/>
    </main>
  )
}

export default App;