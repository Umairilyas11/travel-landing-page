import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import NatureSlider from "./components/NatureSlider";
import GetConnectedSection from "./components/GetConnectedSection";
import DealsSections from "./components/DealsSections";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <NatureSlider />
      <GetConnectedSection />
      <DealsSections />
    </>
  );
}

export default App;
