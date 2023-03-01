export default function Rectangle({ type, number }) {
  return (
    <div>
      <span>{type}</span>
      <strong>{number} / 100</strong>
    </div>
  );
}
