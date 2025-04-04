export default function Titre({ titre, className, children }) {
  return (
    <p className={`taille-gd te-gras ${className}`}>
      {children} {titre}
    </p>
  );
}
