import ImageDann from "../assets/images/dann2.jpg";
import BoutonTheme from "./BoutonTheme";
import Image from "./ui/Image";

export default function Header({ nom, profile, description }) {
  return (
    <header className="header">
      <div
        className="w-full mb-2 aff-flex jc-sb ai-mil p-2 sticky haut-0 gauche-0 droite-0 z-max"
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

      <div className="aff-flex jc-sb ai-mil gap-3 mb-3">
        <div className="aff-flex fd-col gap-4">
          <div
            className="cercle aff-flex ai-mil jc-mil"
            style={{ overflow: "hidden", width: 180, height: 180 }}
          >
            <Image source={ImageDann} alt="Profile" />
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
          <span>{profile}</span>
        </div>
      </div>
      <p>{description}</p>
      <div className="divider"></div>
    </header>
  );
}
