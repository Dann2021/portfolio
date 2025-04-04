export default function Bouton({
  type,
  variant,
  className,
  children,
  onClick,
  mode,
}) {
  return (
    <button
      className={`bouton bouton${
        variant ? "-contour-" + type : "-" + type
      } ${className}`}
      onClick={onClick}
      type={mode}
    >
      {children} {/*variant && "contour"*/} {/** C'est type qui était là */}
    </button>
  );
}
