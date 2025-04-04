export default function Paragraphe({ children, className, style }) {
  return (
    <p className={`taille-myn my-5 ${className}`} style={style}>
      {children}
    </p>
  );
}
