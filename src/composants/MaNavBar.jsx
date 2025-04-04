import { Link } from "react-scroll";

export default function NavBar({ logo }) {
  function ouvreNavBar() {
    const partie2 = document.querySelector(".navMenu");
    partie2.classList.toggle("activeur");
  }
  /*function menuDeroulant() {
    document.getElementById("menu-contenu").classList.toggle("voir");
  }*/
  return (
    <nav className="conteneur navigation poppins theme-sombre">
      <div className="partie1">
        {/** Ici c'est pour la sidebar */}
        {/*<div className="sideBouton" onClick="ouverture()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </div>*/}
        <div className="logo">
          {/*<img src={logo} alt="" className="logo-image" />*/}
          <p className="texte-3 texte-couleur-vert-jade te-noir jersey">
            Dannys
          </p>
        </div>
        <div className="btnNavBar" onClick={ouvreNavBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
      <div className="navMenu">
        <ul className="menu">
          <li>
            {" "}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="texte-couleur-gris nav-item curseur-pointeur"
            >
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="texte-couleur-gris nav-item curseur-pointeur"
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="competence"
              smooth={true}
              duration={500}
              className="texte-couleur-gris nav-item curseur-pointeur"
            >
              Compétences
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="projet"
              smooth={true}
              duration={500}
              className="texte-couleur-gris nav-item curseur-pointeur"
            >
              Projet
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="texte-couleur-gris nav-item curseur-pointeur"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
