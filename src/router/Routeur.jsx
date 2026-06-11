import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Competences from "../pages/Competences";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Projet from "../pages/Projet";

function Routeur() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="competences" element={<Competences />} />
        <Route path="projets" element={<Projet />} />
        <Route path="contacts" element={<Contacts />} />

      
      </Route>
    </Routes>
  );
}

export default Routeur;
