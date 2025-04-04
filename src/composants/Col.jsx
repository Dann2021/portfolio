export default function Col({ children, className, style }) {
  return (
    <div className={`col ${className}`} style={style}>
      {children}
    </div>
  );
}
