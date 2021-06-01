import Header from "./components/sections/Header";
import Nav from "./components/Nav";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
