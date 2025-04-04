import Conteneur from "./composants/Conteneur";
import About from "./pages/About";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projet from "./pages/Projet";

function App() {
  return (
    <Conteneur className={"poppins"}>
      <Home />
      <About />
      <Competence />
      <Projet />
      <Contact />
    </Conteneur>
  );
}

export default App;
