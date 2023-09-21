import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Trusted from "./components/trusted";
import Service from "./components/service";
import Platform from "./components/platform";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
const App = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f9", zIndex: "-99999" }}>
      <Navbar />
      <Hero id="home" />
      <Trusted id="about" />
      <Service id="support" />
      <Platform id="platforms" />
      <Pricing id="pricing" />
      <Footer />
    </div>
  );
};

export default App;
