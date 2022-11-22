import React from "react";
import Hero from "./Components/Hero/Hero";
import MainSection from "./Components/MainSection/MainSection";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Hero />
      <main>
        <MainSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
