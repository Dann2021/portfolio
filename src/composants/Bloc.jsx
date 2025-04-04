export default function Bloc({
  type,
  nombre,
  children,
  className,
  mobile = 12,
  style,
}) {
  // ici mobile est la valeur par défaut et ce bloc-mobile est pour les petits écrans
  return (
    <div
      className={`bloc-${mobile} bloc-${type}-${nombre} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
