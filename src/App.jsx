import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <HeroBanner />
    </div>
  );
}

export default App;
