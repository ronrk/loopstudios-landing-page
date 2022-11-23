import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import MainSection from "./Components/MainSection/MainSection";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MobileMenu from "./Components/MobileMenu/MobileMenu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {isMenuOpen && (
        <MobileMenu showMenu={isMenuOpen} toggleMenu={toggleMenu} />
      )}
      <Navbar toggleMenu={toggleMenu} showMenu={isMenuOpen} />

      <Hero />
      <MainSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
