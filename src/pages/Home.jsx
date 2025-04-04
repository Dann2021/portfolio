import React from "react";
import DannImage from "../assets/image/dann2.png";
import Bloc from "../composants/Bloc";
import Image from "../composants/Image";
import Ligne from "../composants/Ligne";
//import { FaFaceBook } from "react-icons/di";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  const nom = "Dann Sloann";
  return (
    <div id="home">
      <Ligne className={"jc-sb my-5"}>
        <Bloc type={"myn"} nombre={7}>
          {/*<Titre
            className={"ta-mil"}
            titre={`Bonjour je m'appelle ${nom} et je suis un jeune passionné`}
          />*/}
          <p className="texte-6 ta-mil">
            Salut je suis{" "}
            <span className="texte-couleur-vert-jade">{nom} </span> et je suis
            un jeune passionné par l'informatique et les nouvelles technologies.
          </p>
          <p className="texte-couleur-bleu-petrole ta-mil taille-myn">
            Rejoingez moi sur ces différents réseaux{" "}
          </p>
          <div className="aff-flex gap-5 jc-mil" style={{ fontSize: "2rem" }}>
            <a
              href="https://linkedin.com"
              className="td-none texte-couleur-gris survol"
            >
              {" "}
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com"
              className="td-none texte-couleur-gris survol"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              className="td-none texte-couleur-gris survol"
            >
              {" "}
              <FaGithub />
            </a>
          </div>
        </Bloc>
        <Bloc type={"myn"} nombre={4} className={"col ai-mil"}>
          <Image
            source={DannImage}
            height={300}
            width={300}
            className={"ronde image-cover survol curseur-pointeur"}
          />
        </Bloc>
      </Ligne>
    </div>
  );
}
