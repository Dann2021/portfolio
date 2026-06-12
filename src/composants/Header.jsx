import ImageDann from "../assets/images/dann2.jpg";
import BoutonTheme from "./BoutonTheme";
import Image from "./ui/Image";

export default function Header({ nom, profile, description }) {
  return (
    <header className="header">
      <div
        className="w-full mb-2 aff-flex jc-sb ai-mil p-2 sticky haut-0 z-max"
        style={{
          borderBottom: "1px solid var(--border-subtle)",
          background: "transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <h4>{nom}</h4>
        <BoutonTheme />
      </div>

      <div className="aff-flex jc-mil jc-pt-sb ai-mil gap-3 mb-3 fd-col  fd-pt-ligne">
        <div className="aff-flex fd-col ai-mil ai-pt-deb gap-4">

          <div
            className="cercle aff-flex ai-mil jc-mil"
            style={{ overflow: "hidden", width: 180, height: 180 }}
          >
            <Image  className={"image-cover ratio-auto"} source={ImageDann} alt="Profile"  />
          </div>

          <div className="aff-flex ai-mil gap-2 fw-wrap">
            <div className="tech-tag">
              <span>2 projets actifs</span>
            </div>
            <div className="tech-tag">
              <span>5 ans d'expériences</span>
            </div>

          </div>
        </div>

        <div className="eyebrow">
          <span className="texte-2">{profile}</span>
        </div>
      </div>
      
      <p className="">{description}</p>
      <div className="divider"></div>
    </header>
  );
}
