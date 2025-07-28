import React,{useEffect,useState} from 'react';
import '../styles/Navbar.css';
function Navbar() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav>
      <p></p>
      <ul id='navbar' className={scrolled ? 'scrolled' : ''}>
        <li id='tran'></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#achievements">Achivement</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;