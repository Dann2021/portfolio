export default function Ligne({ children, className, style }) {
  return (
    <div className={`ligne  gap-5 py-2 ${className}`} style={style}>
      {children}
    </div>
  );
}
