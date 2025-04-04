import {
  faBars,
  faGlobe,
  faHeadset,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterElement from "./FooterElement";

export default function Footer2() {
  return (
    <footer className="footer">
      <div className="menu-conteneur">
        <FooterElement
          titre={"Navigation Rapide"}
          icone={<FontAwesomeIcon icon={faBars} />}
        >
          <li></li>

          <li></li>
          <li></li>
        </FooterElement>

        <FooterElement
          titre={"Support Assistance"}
          icone={<FontAwesomeIcon icon={faHeadset} />}
        >
          <li></li>
          <li></li>
        </FooterElement>
        <FooterElement
          titre={"Réseaux Sociaux"}
          icone={<FontAwesomeIcon icon={faShareAlt} />}
        ></FooterElement>

        <FooterElement
          titre={"Langues Accessibilité"}
          icone={<FontAwesomeIcon icon={faGlobe} />}
        >
          {/*<li>
            <Lien chemin={"/langues"} className={"texte-couleur-gris-claire"}>
              <FontAwesomeIcon icon={faLanguage} /> Sélecteur de langue
            </Lien>
          </li>*/}
        </FooterElement>
      </div>
      <LogoReseau />
      <p className="ta-mil taille-gm">Tous les droits reserves</p>
    </footer>
  );
}

{
  /*export function LogoReseau() {
  return (
    <div className={"aff-flex jc-mil gap-3 m-4"}>
      <FontAwesomeIcon icon={faTwitter} size="2x" />

      <FontAwesomeIcon icon={faFacebook} size="2x" />

      <FontAwesomeIcon icon={faSnapchat} size="2x" />

      <FontAwesomeIcon icon={faLinkedin} size="2x" />

      <FontAwesomeIcon icon={faInstagram} size="2x" />

      <FontAwesomeIcon icon={faTiktok} size="2x" />
    </div>
  );
}
*/
}
