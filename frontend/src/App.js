import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Marquee from "./components/site/Marquee";
import About from "./components/site/About";
import Services from "./components/site/Services";
import Athletes from "./components/site/Athletes";
import Bars from "./components/site/Bars";
import LawFirms from "./components/site/LawFirms";
import Process from "./components/site/Process";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

/** Scrolls to the hash on route change, or to top when there is none. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <About />
    <Services />
    <Process />
    <Contact />
  </>
);

/** Layout wrapper used for every solution / vertical page. */
const SolutionPage = ({ children }) => (
  <>
    {children}
    <Contact />
  </>
);

const Shell = () => (
  <div className="min-h-screen bg-white text-[#1F2A48] antialiased">
    <Header />
    <ScrollManager />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/solutions/athletes"
          element={
            <SolutionPage>
              <Athletes />
            </SolutionPage>
          }
        />
        <Route
          path="/solutions/bars-bands"
          element={
            <SolutionPage>
              <Bars />
            </SolutionPage>
          }
        />
        <Route
          path="/solutions/attorneys"
          element={
            <SolutionPage>
              <LawFirms />
            </SolutionPage>
          }
        />
      </Routes>
    </main>
    <Footer />
    <Toaster position="bottom-right" />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </div>
  );
}

export default App;
