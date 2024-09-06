// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import RotatingImages from './components/RotatingImages/RotatingImages';
import TechStack from './components/TechStackP/TechStackP';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <RotatingImages />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;