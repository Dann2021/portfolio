import { Link } from "lucide-react";
import ImageFlexible from "../assets/images/flexible.png";
import ImageOrion from "../assets/images/orion.png";
import Bouton from "../composants/ui/Bouton";
import Image from "../composants/ui/Image";
import Lien from "../composants/ui/Lien";

const badgeOrion = [
  { id: 1, label: "Flask" },
  { id: 2, label: "Python" },
  { id: 3, label: "React Js" },
];
const badgeFlexible = [
  { id: 1, label: "Html" },
  { id: 2, label: "Css" },
  { id: 3, label: "Scss" },
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
      <div className="p-2 mb-5">
        <p className="centre">
          <em>
            Découvrez une sélection de projets sur lesquels j'ai travaillé,
            mettant en avant mes compétences en développement web, en conception
            d'interfaces et en architecture logicielle.
          </em>
        </p>
      </div>

      <div className="p-myn-4 p-2 p-pt-11">
        <CardProjet
          chemin={"https://orionstudio.cloud"}
          source={ImageOrion}
          nom={"Orion"}
          description={"Orion est un générateur backend no-code"}
          badges={badgeOrion}
        />
        <CardProjet
          chemin={"https://flexiblecss.vercel.app"}
          source={ImageFlexible}
          nom={"Flexible CSS"}
          description={"Flexible est un framework css"}
          badges={badgeFlexible}
        />
      </div>
    </div>
  );
}

const CardProjet = ({ nom, description, source, badges = [], chemin }) => {
  return (
    <div className="card mb-3 p-1 ">
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
        <div className="aff-flex ai-mil gap-2">
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
              <Link size={16} />
            </Bouton>
          </Lien>
        </div>
      </div>
    </div>
  );
};
