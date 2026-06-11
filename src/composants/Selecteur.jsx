export default function Selecteur({
  children,
  label,
  onChange,
  name,
  className,
  style,
  value,
  icone,
}) {
  return (
    <div className={`selecteur ${className}`} style={style}>
      <label htmlFor={name} className="monLabel">
        {label}
      </label>
      <div className="aff-flex ai-mil gap-2 w-full">
        {icone}
        <select
          value={value}
          name={name}
          className="selectElement"
          onChange={onChange}
        >
          {children}
        </select>
      </div>
    </div>
  );
}
