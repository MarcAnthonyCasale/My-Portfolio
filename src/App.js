// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
// import RotatingImages from './components/RotatingImages/RotatingImages';
import TechStack from './components/TechStackP/TechStackP';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <Navbar />
      <HeroSection />
      {/* <RotatingImages /> */}
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;