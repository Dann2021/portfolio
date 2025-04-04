import React from "react";
import Bloc from "../composants/Bloc";
import Bouton from "../composants/Bouton";
import Ligne from "../composants/Ligne";
import Paragraphe from "../composants/Paragraphe";
import Icons from "../constantes/Icone";
export default function About() {
  return (
    <div id="about" className="mh-20">
      <p className="texte-5 texte-couleur-bleu-petrole td-souligne ta-mil">
        A propos
      </p>
      <Ligne className={"jc-sb"}>
        <Bloc type={"myn"} nombre={6} className={"col ai-mil"}>
          <Paragraphe className={"taille-gm ta-mil"}>
            Etant passionée par l'informatique depuis petit je me suis lancé
            dans cette aventure palpitante qui m'a permit d'acquérir des
            compétences dans ce vaste secteur notamment en{" "}
            <span className="texte-couleur-vert-jade te-noir  ">
              {" "}
              programmation
            </span>{" "}
            et en{" "}
            <span className="texte-couleur-vert-jade te-noir">
              cybersécurité
            </span>{" "}
            et comprendre les concepts clés de chaque branches de certaines
            branche de l'informatique.
          </Paragraphe>

          <Bouton type={"succes"}>
            <a
              href="https://wa.me/24177181090?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
              style={{ textDecoration: "none", color: "white" }}
            >
              contactez moi sur whatsapp
            </a>
          </Bouton>
        </Bloc>
        <Bloc type={"myn"} nombre={5} className={"col ai-mil"}>
          <Icons.Coding
            height={500}
            width={500}
            className="image survol curseur-pointeur"
          />
        </Bloc>
      </Ligne>
    </div>
  );
}
