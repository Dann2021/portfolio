export default function TexteArea({
  placeholder,
  message,
  onChange,
  className,
  ligne,
}) {
  return (
    <div  className={`texteArea  ${className}`}>
      <textarea
        rows={ligne}
        style={{border: "1px solid var(--border)"}}
        className="texteElement"
        placeholder={placeholder}
        value={message}
        onChange={onChange}
      ></textarea>
    </div>
  );
}