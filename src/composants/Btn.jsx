import clsx from "./classe";
import Bouton from "./ui/Bouton";

export default function Btn({ 
  icon: Icon,
  title,
  onClick,
  active=false,
  children,
  ...props
}) {
  return (
    <Bouton
    
      onClick={onClick}
      title={title}
      taille="min"
      variant="contour"
      className={clsx(
        "bouton-icone ronde btn",
        active && "toolbar-btn--active"
      )}
      {...props}
    >
      {Icon && <Icon size={15} strokeWidth={1.8} />}
      {children}
    </Bouton>
  );
}