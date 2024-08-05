import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Section/About/About";
import Contact from "./Section/Contact/Contact";
import Home from "./Section/Home/Home";
import Project from "./Section/Project/Project";
import Skill from "./Section/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
