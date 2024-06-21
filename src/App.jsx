import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <HeroBanner />
        <SkillSection />
      </div>
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
