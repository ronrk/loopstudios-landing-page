import React from "react";
import Hero from "./Components/Hero/Hero";
import MainSection from "./Components/MainSection/MainSection";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <MainSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
