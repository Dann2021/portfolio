
export default function BtnCol({ classeName, type, onClick }) {
  return (
    <label className={`coulissant   ${classeName}`}>
      <input type="checkbox"  />
      <div className={`forme   ${type}`} onClick={onClick} ></div>
    </label>
  );
}

