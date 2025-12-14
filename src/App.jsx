import React from "react";
import Navigations from "./components/Navigations";
import About from "./components/About";
import Hero from "./components/Hero";
import Faq from "./components/FaQ";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function App() {
  return (
    <div>
      <Navigations/>
      <Hero/>
      <Features/>
      <About/>
      <Faq/>
      <Download/>
      <Footer/>
    </div>
  );
}
