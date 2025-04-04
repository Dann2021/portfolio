import React from "react";
//import { GiSkills } from "react-icons/gi";
import {
  SiCanva,
  SiCss3,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiKalilinux,
  SiPython,
  SiReact,
  SiStreamlit,
  SiWireshark,
} from "react-icons/si";
import Bloc from "../composants/Bloc";
import Col from "../composants/Col";
import Ligne from "../composants/Ligne";

export default function Competence() {
  return (
    <div id="competence" className="conteneur">
      <p className="texte-5 texte-couleur-bleu-petrole ta-mil td-souligne ">
        Compétences
      </p>

      <Col className={"ai-mil gap-8 mh-8"}>
        <p className="texte-2 ta-mil">
          Au fil du temps je me suis découvert une grande passion pour les
          langages de programmations. Ces derniers m'ont permit de comprendre
          certains concepts et de voir l'informatique d'un autre point de vue.
          Tout ceci m'a amené à vouloir comprendre les choses par elles même que
          de juste faire du{" "}
          <span className="texte-couleur-vert-jade te-noir">copier-coller</span>
          .
        </p>
        <p className="texte-2 ta-mil">
          J'ai pour ambition de ne plus être dépendant des grandes plateformes
          technologiques la preuve en est que ce{" "}
          <span className="texte-couleur-vert-jade te-noir">PORTFOLIO</span> est
          développé avec mon{" "}
          <span className="texte-couleur-vert-jade te-noir">Framework CSS</span>{" "}
        </p>
        <p className="texte-3 ta-mil ">
          Mes principales compétences en programmation sont les suivantes
        </p>
      </Col>
      <Langage />
      <p className="texte-3 ta-mil ">Logiciel utiles</p>
      <Logiciel />
    </div>
  );
}

function Langage() {
  return (
    <Ligne className={"jc-mil"}>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#1E1E1E" }}
      >
        <SiReact size={100} className="image" color="#61DBFB" />
        <p className="ta-mil">React JS</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#121212" }}
      >
        <SiFlask size={100} color="#000000" />
        <p className="ta-mil">Flask</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#2D2D2D" }}
      >
        <SiJavascript size={100} color="#F7DF1E" />
        <p className="ta-mil">JavaScript</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#222E3A" }}
      >
        <SiPython size={100} color="#3776AB" />
        <p className="ta-mil">Python</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#2D2D2D" }}
      >
        <SiHtml5 size={100} color="#E34F26" />
        <p className="ta-mil">Html</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#1E293B" }}
      >
        <SiCss3 size={100} color="#1572B6" />
        <p className="ta-mil">Css</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={3}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#2D2D2D" }}
      >
        <SiStreamlit size={100} color="#FF4B4B" />
        <p className="ta-mil">Streamlit</p>
      </Bloc>
    </Ligne>
  );
}

function Logiciel() {
  return (
    <Ligne className={"jc-mil"}>
      <Bloc
        type={"myn"}
        nombre={2}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#1E1E1E" }}
      >
        <SiCanva size={100} className="image" color="#00C4CC" />
        <p className="ta-mil">Canva</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={2}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#121212" }}
      >
        <SiJupyter size={100} color="#F37626" />
        <p className="ta-mil">Jupyter NoteBook</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={2}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#2D2D2D" }}
      >
        <SiWireshark size={100} color="#1679A7" />
        <p className="ta-mil">Wireshark</p>
      </Bloc>
      <Bloc
        type={"myn"}
        nombre={2}
        className={"col ai-mil ronde p-2"}
        style={{ background: "#222E3A" }}
      >
        <SiKalilinux size={100} color="#557C94" />
        <p className="ta-mil">Kali Linux</p>
      </Bloc>
    </Ligne>
  );
}
