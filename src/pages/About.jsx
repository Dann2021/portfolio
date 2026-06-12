export default function About() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="p-2 p-pt-11 p-myn-4">
        <p className="cen">
          Je développe des applications web complètes en utilisant React et
          Python. J'aime construire des projets de A à Z, de l'interface
          utilisateur jusqu'à l'API et la base de données.{" "}
        </p>
      </div>

      <Section title={"Mon histoire"} />
    </div>
  );
}


const Section = ({ title }) => {
  return (
    <section className="section p-2 p-myn-4 p-pt-11">
      <h3>{title}</h3>
      <p className="mh-2">
        Je suis développeur full stack autodidacte, passionné par la création de
        solutions numériques concrètes.
      </p>
      <p className="my-1">
        Au fil des années, j'ai appris à concevoir des applications complètes,
        du frontend au backend, en travaillant principalement avec React.js et
        Python. Cette approche m'a permis de comprendre non seulement comment
        développer une interface moderne, mais aussi comment construire des API
        robustes, gérer des bases de données et déployer des applications
        réelles.
      </p>
      <p className="my-2">
        J'aime particulièrement transformer des idées en produits fonctionnels.
        Parmi mes réalisations figurent des plateformes de gestion d'événements,
        des applications de transfert de colis, des outils d'automatisation et
        plusieurs projets personnels visant à résoudre des problèmes concrets.
      </p>
      <p className="my-2">
        Au-delà du développement web, je m'intéresse également à la conception
        de frameworks, aux systèmes d'exploitation, à l'intelligence
        artificielle et à l'architecture logicielle. J'accorde une grande
        importance à l'apprentissage continu et à l'amélioration de mes
        compétences techniques.
      </p>
      <p>
        Aujourd'hui, mon objectif est de construire des produits utiles,
        performants et accessibles tout en continuant à explorer de nouvelles
        technologies.
      </p>
    </section>
  );
};
