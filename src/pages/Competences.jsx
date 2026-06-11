
import {
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNpm,
    FaPython,
    FaReact,
} from "react-icons/fa";


import {
    SiFlask,
    SiFramer,
    SiJsonwebtokens,
    SiMysql,
    SiPostgresql,
    SiReactrouter,
    SiSqlalchemy,
    SiVite,
} from "react-icons/si";
export default function Competences() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="badge">
        <span>Competences</span>
      </div>
      <div className="p-2">
        <p className="centre">
         Au fil de mes expériences, j'ai développé une expertise complète dans la création d'applications web modernes. De l'interface utilisateur aux services backend, en passant par les bases de données et l'architecture logicielle, j'aime concevoir des solutions performantes, évolutives et centrées sur les besoins des utilisateurs.

        </p>
      </div>

      <Section title={"Frontend"} />
      <SectionBackend title={"Backend"} />
    </div>
  );
}

const Section = ({ title }) => {
  return (
    <section className="section p-2 p-myn-4 p-pt-11">
      <h3 className="text-mono">{title}</h3>
     
     <p className="my-1">
  Je conçois des interfaces web modernes, responsives et performantes avec React.js.
  J'accorde une attention particulière à l'expérience utilisateur, à l'architecture
  des composants et à la qualité du code. J'aime créer des applications intuitives,
  intégrer des animations fluides et développer des interfaces capables de s'adapter
  à tous les types d'écrans.
</p>

    <div className="aff-flex ai-mil gap-2 mh-2 fw-wrap">

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaReact size={18} color="#61DAFB" />
    <span>React.js</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaJs size={18} color="#F7DF1E" />
    <span>JavaScript</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaHtml5 size={18} color="#E34F26" />
    <span>HTML5</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaCss3Alt size={18} color="#1572B6" />
    <span>CSS3</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiVite size={18} color="#646CFF" />
    <span>Vite</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiReactrouter size={18} color="#CA4245" />
    <span>React Router</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiFramer size={18} color="#0055FF" />
    <span>Framer Motion</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaGitAlt size={18} color="#F05032" />
    <span>Git</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaNpm size={18} color="#CB3837" />
    <span>NPM</span>
  </div>

</div>
    </section>
  );
};


const SectionBackend = ({ title }) => {
  return (
    <section className="section p-2 p-myn-4 p-pt-11">
      <h3 className="text-mono">{title}</h3>
     
    <p className="my-1">
  Je développe des API REST sécurisées avec Python et Flask.
  J'utilise SQLAlchemy pour la gestion des bases de données,
  JWT pour l'authentification, ainsi que des outils comme
  Alembic pour les migrations. Mon expérience couvre la
  conception d'architectures backend, la gestion des données,
  la sécurisation des accès et le déploiement d'applications.
</p>
 
 <div className="aff-flex ai-mil gap-2 mh-2 fw-wrap">

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaPython size={18} color="#3776AB" />
    <span>Python</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiFlask size={18} color="#000000" />
    <span>Flask</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiSqlalchemy size={18} color="#D71F00" />
    <span>SQLAlchemy</span>
  </div>

  

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiMysql size={18} color="#4479A1" />
    <span>MySQL</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiPostgresql size={18} color="#4169E1" />
    <span>PostgreSQL</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <SiJsonwebtokens size={18} color="#D63AFF" />
    <span>JWT</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaDocker size={18} color="#2496ED" />
    <span>Docker</span>
  </div>

  <div className="tech-tag aff-flex ai-mil gap-2">
    <FaGitAlt size={18} color="#F05032" />
    <span>Git</span>
  </div>

</div>
    </section>
  );
};