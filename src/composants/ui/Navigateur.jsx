/* eslint-disable no-unused-vars */
import { Box } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Couleurs from "../../constantes/Couleurs";
import { useAuth } from "../../contexte/AuthContexte";
import "../../styles/navigateur.css";
import BoutonTheme from "../BoutonTheme";
import Btn from "../Btn";
import OrionLogo from "../OrionLogo";
import Lien from "./Lien";
import TexteDegrade from "./TexteDegrade";

export default function Navigateur({ logo, texte }) {
  const { user } = useAuth();
  const [activeur, setActiveur] = useState(false);
  const navigate = useNavigate();
  const ouverture = () => setActiveur(!activeur);

  return (
    <nav className={"conteneur  haut-0 navigateur ronde-1  z-max"} style={{
        background: "transparent",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)", // Safari
      }}>
      <div className="elements">
        <div className="logo aff-flex ai-mil gap-2">
          <Lien chemin={"/"}>
            <OrionLogo size={32} />
          </Lien>
          <TexteDegrade
            as="h3"
            className="bricolage"
            couleurs={`${Couleurs.cyan}, ${Couleurs.indigo}`}
          >
            {texte}
          </TexteDegrade>
        </div>
        <div className="actions-btn">
          <div className="bt-user"></div>

          <div className="bt-hamburge aff-flex  ai-mil gap-5 aff-myn-none">
            {/*<Menu size={30} />*/}

            {user ? (
              
                <Btn onClick={() => navigate("/tools")} icon={Box}>
                  Ouvrir Studio
                </Btn>
              
            ) : (
              
                <Lien chemin={"/login"}>
                  <Btn>Se connecter</Btn>
                </Lien>
              
            )}
            <BoutonTheme />
          </div>
        </div>
      </div>

      <div className={`menu-conteneur ${activeur ? "activeur" : ""}`}>
        <ul className="menu">
          <li className="aff-flex ai-mil gap-5">
            <BoutonTheme />
            {user ? (
              <Btn onClick={() => navigate("/tools")} icon={Box}>
                Ouvrir Studio
              </Btn>
            ) : (
              <Lien chemin={"/login"}>
                <Btn>Se connecter</Btn>
              </Lien>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
