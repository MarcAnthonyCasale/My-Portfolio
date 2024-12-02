// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
// import RotatingImages from './components/RotatingImages/RotatingImages';
import TechStack from './components/TechStackP/TechStackP';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import MyResume from './components/MyResume/MyResume';
import Logo from './components/Logo/Logo';
function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Saira:wght@400;700&display=swap" rel="stylesheet"></link>


      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <MyResume />
      <Logo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;