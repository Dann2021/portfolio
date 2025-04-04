import { Link } from "react-router-dom";

export default function Lien({ children, className, chemin }) {
  return (
    <Link to={chemin} className={className}>
      {children}
    </Link>
  );
}
