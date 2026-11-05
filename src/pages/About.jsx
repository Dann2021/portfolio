export default function About() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="p-1 p-pt-11 p-myn-4">
        <p className="cen">
          Je développe des applications web avec React et Python. J'aime
          construire mes projets de A à Z, de l'interface utilisateur jusqu'à
          l'API et la base de données.
        </p>
      </div>

      <Section title="Mon histoire" paragraphes={HISTOIRE} />
    </div>
  );
}

const HISTOIRE = [
  "Je suis développeur full stack autodidacte. Passionné d'informatique depuis toujours, j'ai découvert la programmation après mon bac, en voyant mon oncle créer une page web en HTML. Depuis, j'apprends par la pratique, complétée par des cours en ligne.",
  "Je travaille principalement avec React et Python : interfaces, API, bases de données et déploiement. Mes projets, comme Orion, Flexible CSS ou mes applications Streamlit, sont en ligne et décrits dans la page Projets.",
  // Ajoute ici tes autres réalisations seulement si elles sont terminées ou en ligne
  // (événements, colis, automatisation...), avec un lien dans la page Projets.
  "Je suis aussi économiste de formation, titulaire d'un Master en gestion des risques et assurances, et je prépare un master en banque. Cette double culture m'intéresse particulièrement pour les outils numériques appliqués à la banque et à la finance.",
  "Je m'intéresse également à la conception de frameworks, aux systèmes d'exploitation, à l'intelligence artificielle et à l'architecture logicielle, et j'accorde une grande importance à l'apprentissage continu.",
  "Mon objectif est de construire des produits utiles, performants et accessibles, tout en continuant à explorer de nouvelles technologies.",
];

const Section = ({ title, paragraphes = [] }) => {
  return (
    <section className="section p-2 p-myn-4 p-pt-11">
      <h3>{title}</h3>
      {paragraphes.map((texte, i) => (
        <p key={i} className="my-2">
          {texte}
        </p>
      ))}
    </section>
  );
};
