import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import NatureSlider from "./components/NatureSlider";
import GetConnectedSection from "./components/GetConnectedSection";
import DealsSections from "./components/DealsSections";
import TestimonialSection from "./components/TestimonialSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <NatureSlider />
      <GetConnectedSection />
      <DealsSections />
      <TestimonialSection />
      <InfoSection />
      <Footer />
    </>
  );
}

export default App;
