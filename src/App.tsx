import Header from './components/Header';
import Intro from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects/projects';
import ShowProjects from './components/ShowProjects';
import Footer from './components/Footer';
import { useState, useRef } from 'react';
import './App.css';
import experienceData from './data/experience.json';
import { ExperienceList } from './interfaces/types';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
// import Certificates from './components/Certificates';
import Contacts from './components/Contacts/contacts';

/* eslint-disable */

function App() {
  const [experience] = useState<ExperienceList[]>(experienceData);
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  // const projectsRef = useRef<HTMLDivElement>(null);
  const showProjectsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0); 
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="App">
              <Header
                scrollToIntro={() => introRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToExperience={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
                // scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToShowProjects={() => showProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToCertificates={() => certificatesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToContacts={() => contactsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              />
              <div ref={introRef}>
                <Intro />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={experienceRef}>
                <Experience experiences={experience} />
              </div>
              <div ref={showProjectsRef}>
                <ShowProjects />
              </div>
              <div ref={certificatesRef}>
                {/* <Certificates /> */}
              </div>
              <div ref={contactsRef}>
                <Contacts />
              </div>
              <Footer />
            </div>
          }/>
          {/* <Route path="/showprojects" element={<ShowProjects />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// return (
//   <ThemeProvider theme={theme}>
//     <Router>
//       <div className="App">
//         <Header
//           scrollToIntro={() => introRef.current?.scrollIntoView({ behavior: 'smooth' })}
//           scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
//           scrollToExperience={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
//           scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
//           scrollToCertificates={() => certificatesRef.current?.scrollIntoView({ behavior: 'smooth' })}
//           scrollToContacts={() => contactsRef.current?.scrollIntoView({ behavior: 'smooth' })}
//         />
//         <div ref={introRef}>
//           <Intro />
//         </div>
//         <div ref={aboutRef}>
//           <About />
//         </div>
//         <div ref={experienceRef}>
//           <Experience experiences={experience} />
//         </div>
//         <div ref={projectsRef}>
//           <Projects />
//         </div>
//         <Routes>
//           <Route path="/showprojects" element={<ShowProjects />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   </ThemeProvider>
// );
// }

export default App;
function setIsVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

