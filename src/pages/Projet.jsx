import { Link2 } from "lucide-react";
import ImageFlexible from "../assets/images/flexible.png";
import ImageMathematica from "../assets/images/mathematica.png";
import ImageOptimum from "../assets/images/optimum.png";
import ImageOrion from "../assets/images/orion.png";
import Bouton from "../composants/ui/Bouton";
import Image from "../composants/ui/Image";
import Lien from "../composants/ui/Lien";

const badgeOrion = [
  { id: 1, label: "Flask" },
  { id: 2, label: "Python" },
  { id: 3, label: "React" },
];
const badgeFlexible = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "SCSS" },
];
const badgeMathematica = [
  { id: 1, label: "Python" },
  { id: 2, label: "Streamlit" },
  { id: 3, label: "NumPy" },
];
const badgeOptimum = [
  { id: 1, label: "Python" },
  { id: 2, label: "Streamlit" },
  { id: 3, label: "SymPy" }, // à vérifier : l'utilises-tu vraiment ici ?
];

const descOrion =
  "Orion est une application web qui facilite la création d'un backend en Flask ou en FastAPI. Elle permet de concevoir visuellement une architecture backend à base de nœuds : chaque nœud représente à la fois une table de la base de données, une classe Python (Flask ou FastAPI) et une route d'API. Projet en cours de développement.";
const descFlexible =
  "Flexible CSS est un framework CSS conçu pour réapprendre le CSS et faciliter le développement de mes projets web.";
const descMathematica =
  "Mathematica est une application web réalisée en Python avec Streamlit, pour réviser et approfondir mes connaissances en économétrie. La partie statistique a été entièrement réalisée avec NumPy, sans librairie externe.";
const descOptimum =
  "Optimum: Mathematica est une application web en Python qui m'a permis de m'entraîner en optimisation mathématique et de comprendre les concepts fondamentaux de cette discipline.";

const PROJET_MAP = [
  {
    id: 1,
    chemin: "https://orionstudio.cloud",
    source: ImageOrion,
    nom: "Orion",
    description: descOrion,
    badges: badgeOrion,
  },
  {
    id: 2,
    chemin: "https://flexiblecss.vercel.app",
    source: ImageFlexible,
    nom: "Flexible",
    description: descFlexible,
    badges: badgeFlexible,
  },
  {
    id: 3,
    chemin: "https://dann2021.streamlit.app",
    source: ImageMathematica,
    nom: "Mathematica",
    description: descMathematica,
    badges: badgeMathematica,
  },
  {
    id: 4,
    chemin: "https://dann2021opt.streamlit.app",
    source: ImageOptimum,
    nom: "Optimum: Mathematica",
    description: descOptimum,
    badges: badgeOptimum,
  },
];

export default function Projet() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="badge">
        <span>Projets</span>
      </div>
      <div className="p-2 mb-5 p-myn-4 p-pt-11">
        <p>
          <em>
            Découvrez une sélection de projets sur lesquels j'ai travaillé,
            mettant en avant mes compétences en développement web, en conception
            d'interfaces et en architecture logicielle.
          </em>
        </p>
      </div>

      <div className="p-myn-4 p-pt-6">
        {PROJET_MAP.map((el) => (
          <CardProjet key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

const CardProjet = ({ nom, description, source, badges = [], chemin }) => {
  return (
    <div className="card mb-3 p-1">
      <div
        className="w-full ronde"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <Image
          className={"ronde"}
          source={source}
          alt={`Aperçu du projet ${nom}`}
        />
      </div>

      <div className="aff-flex fd-col gap-3 my-3 p-1">
        <h4 className="text-mono">{nom}</h4>
        <p>{description}</p>
      </div>

      <div className="aff-flex ai-mil jc-sb gap-2 p-1">
        <div className="aff-flex ai-mil gap-2 overx-auto ">
          {badges.map((el) => (
            <div key={el.id} className="badge">
              <span>{el.label}</span>
            </div>
          ))}
        </div>

        <div className="aff-flex">
          <Lien chemin={chemin} aria-label={`Ouvrir le projet ${nom}`}>
            <Bouton
              theme="sombre"
              taille={"min"}
              className={"ronde bouton-icone"}
            >
              <Link2 size={14} />
            </Bouton>
          </Lien>
        </div>
      </div>
    </div>
  );
};
