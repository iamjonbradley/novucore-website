import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Marquee from "./components/site/Marquee";
import About from "./components/site/About";
import Services from "./components/site/Services";
import Process from "./components/site/Process";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#1F2A48] antialiased">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
