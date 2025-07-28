import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/home.css';
function Home() {
  return (
    <section className="home" id='home'>
          <h1>Hi, I'm Aditya Rawat</h1>
          <h3>
            I'm a{' '}
            <span style={{ color: '#007bff', fontWeight: 'bold' }}>
              <Typewriter
                words={['Software Engineer', 'Web Developer', 'MERN Stack Developer', 'Java Programmer']}
                loop={0} // Set to 0 for infinite loop, or number for how many times to repeat
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
        </section>
  );
}

export default Home;