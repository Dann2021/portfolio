import { Link } from "react-router-dom";

export default function BoutonLien({
  type,
  contour,
  className,
  children,
  onClick,
  chemin,
}) {
  return (
    <Link to={chemin} className="td-none">
      <button
        className={`bouton bouton${
          contour ? "-contour-" + type : "-" + type
        } ${className}`}
        onClick={onClick}
      >
        {children} {/*variant && "contour"*/} {/** C'est type qui était là */}
      </button>
    </Link>
  );
}
