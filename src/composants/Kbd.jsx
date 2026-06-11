export default function Kbd({ touches }) {
  return (
    <div className="aff-flex gap-1">
      {touches.map((t) => (
        <kbd
          key={t}
          className="taille-pt"
         
        >
          {t}
        </kbd>
      ))}
    </div>
  )
}