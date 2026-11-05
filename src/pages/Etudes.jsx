const formations = [
  {
    periode: "Depuis octobre 2026",
    titre: "Master en banque (en cours)",
    lieu: "BGFI Business School",
    detail: "Formation de banquier.",
  },
  {
    periode: "2021 – 2023",
    titre: "Master en Économie – Gestion des risques et assurances",
    lieu: "Université Omar Bongo, Libreville",
    detail:
      "Mémoire sur la gestion du risque de crédit dans les banques gabonaises.",
  },
  {
    periode: "2018 – 2021", // à vérifier avec tes documents officiels
    titre: "Licence en Économie – Économie Mathématique et Économétrie",
    lieu: "Université Omar Bongo, Libreville",
    detail: "Modélisation économique, statistiques et économétrie.",
  },
  {
    periode: "2018",
    titre: "Baccalauréat série B (Économie)",
    lieu: "Lycée Georges Mabignath",
    detail: "Économie générale, mathématiques et sciences sociales.",
  },
];

const certifications = [
  {
    annee: "2026",
    titre: "Python Essentials 1",
    organisme: "Cisco Networking Academy",
    lien: "https://www.credly.com/badges/7d91cf81-ad9f-4257-9012-eeaf6c06bc67/public_url",
  },
  {
    annee: "2024",
    titre: "Python pour la data science",
    organisme: "LinkedIn Learning",
    lien: "https://www.linkedin.com/learning/certificates/96729cf6adec47ecc9ef445a0e5f210bd925cfeca2bd2d9e94e803897919bbd6?trk=share_certificate",
  },
  {
    annee: "2024",
    titre: "L'essentiel de React.js",
    organisme: "LinkedIn Learning",
    lien: "https://www.linkedin.com/learning/certificates/a13c38eea6d8e7f0eac3699f453ecd29919ba03d3dd451929fd90c7553b282cd?trk=share_certificate",
  },
  {
    annee: "2022",
    titre: "NDG Linux Unhatched",
    organisme: "Cisco Networking Academy",
    lien: "",
  },
  {
    annee: "2022",
    titre: "Introduction to Cybersecurity",
    organisme: "Cisco Networking Academy",
    lien: "https://www.credly.com/badges/e675f4cc-d3f8-4db3-b2d3-96dbb652a7c6/public_url",
  },
];

export default function Etudes() {
  return (
    <div
      className="p-1 w-full"
      style={{ border: "1px solid var(--border-subtle)" }}
    >
      <div className="badge">
        <span>Études</span>
      </div>

      <div className="p-2 p-myn-4 p-pt-11">
        <p className="centr">
          Hormis ma passion pour l'informatique, je suis un économiste de
          formation : titulaire d'un Master en gestion des risques et
          assurances, je prépare actuellement un master en banque à la BGFI
          Business School.
        </p>

        <ol
          style={{
            listStyle: "none",
            margin: "2rem 0 0",
            padding: 0,
            borderLeft: "2px solid var(--border-subtle)",
          }}
        >
          {formations.map((f) => (
            <li key={f.titre} style={{ padding: "0 0 1.5rem 1.25rem" }}>
              <small style={{ opacity: 0.7 }}>{f.periode}</small>
              <h3 style={{ margin: "0.25rem 0" }}>{f.titre}</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>
                <strong>{f.lieu}</strong> — {f.detail}
              </p>
            </li>
          ))}
        </ol>

        <h3 style={{ marginTop: "2rem" }}>Certifications</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {certifications.map((c) => (
            <li key={c.titre} style={{ padding: "0.5rem 0" }}>
              <strong>{c.titre}</strong> — {c.organisme}{" "}
              <small style={{ opacity: 0.7 }}>({c.annee})</small>
              {c.lien && (
                <>
                  {" "}
                  <a
                    href={c.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vérifier le certificat ${c.titre}`}
                  >
                    Vérifier
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
