export default function FooterElement({ titre, icone, children }) {
  return (
    <ul className="menu">
      <span className="ta-mil taille-myn">
        {" "}
        {icone} {titre}
      </span>
      {children}
    </ul>
  );
}
