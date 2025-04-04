// Creation d'un composant conteneur

export default function Conteneur({ children, className }) {
  return (
    <div className={`conteneur py-5 ${className ? className : ""}`}>
      {children}
    </div>
  );
}
