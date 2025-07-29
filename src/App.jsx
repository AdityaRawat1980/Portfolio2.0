import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';

const App = ()=>{
    return (
<>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
export default App