export default function Rectangle({ type, number, icon }) {
  return (
    <div>
      <img src={icon} alt={type + "icon"} />
      <span>{type}</span>
      <strong>{number} / 100</strong>
    </div>
  );
}
