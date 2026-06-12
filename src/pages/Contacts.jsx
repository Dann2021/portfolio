import { FaGithub, FaLinkedin } from "react-icons/fa";
import Lien from "../composants/ui/Lien";

export default function Contacts() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="badge">
        <span>Contacts</span>
      </div>

      <div className="p-2 p-myn-4">
        <p>
          <em>
            Pour toutes collaborations, contactez moi aux addresses ci-dessous
          </em>
        </p>
      </div>

      <div className="aff-flex ai-mil p-2 p-myn-4 gap-3">
        <Lien title="Github" chemin={"https://github.com/Dann2021"}>
          <FaGithub />
        </Lien>

        <Lien
          title="LinkedIn"
          chemin={
            "https://www.linkedin.com/in/dann-sloann-ngomo-mba-16ba3432a/"
          }
        >
          <FaLinkedin />
        </Lien>
      </div>
    </div>
  );
}
