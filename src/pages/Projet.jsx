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
  { id: 1, label: "Html" },
  { id: 2, label: "Css" },
  { id: 3, label: "Scss" },
];

const badgeMathematica = [
  {id: 1, label:"python"},
  {id: 2, label:"numpy"},
  {id: 3, label:"sumpy"},
]

const badgeOptimum = [
  {id: 1, label:"python"},
  {id: 2, label:"numpy"},
  {id: 3, label:"sumpy"},
]

const descOrion = "Orion est une application web dont le but est de facilité la création du backend que ce soit en flask ou fastapi. Orion permet de créer visuellement une architecture backend qui repose sur le principe de noeud, on créé un noeud qui represente une table de la base de données mais aussi une classe python (flask ou fastapi) et une route api."
const desc = "Mathematica est une application web réalisée en python et avec le framework streamlit dont le but était de permettre de réviser et d'approfondir mes connaissances dans l'économétrie. La partie statistique fut réalisé entièrement avec numpy sans librairie externe."
const descOpt = "Optimum Mathématica est une application web réalisée en python qui m'a permit non seulement de m'entraîner en optimisation mathématique mais seulement de comprendre les concepts fondamentaux de l'optimisation."
const PROJET_MAP = [
  {id:1, chemin:"https://orionstudio.cloud", source: ImageOrion, nom: "Orion", description:descOrion ,badges:badgeOrion},
  {id:2, chemin:"https://flexiblecss.vercel.app", source: ImageFlexible, nom: "Flexible", description: "Flexible css est un framework css conçut non seulement pour réapprendre le css mais aussi pour faciliter le développement de mes projets web.",badges:badgeFlexible},
  {id:3, chemin:"https://dann2021.streamlit.app", source: ImageMathematica, nom: "Mathematica", description: desc,badges:badgeMathematica},
  {id:4, chemin:"https://dann2021opt.streamlit.app", source: ImageOptimum, nom: "Optimum: Mathematica", description: descOpt,badges:badgeOptimum},

]
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
        {PROJET_MAP.map((el) => <CardProjet key={el.id} {...el} /> )}
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
        <Image className={"ronde"} source={source} alt={"Orion image"} />
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
          <Lien chemin={chemin}>
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
