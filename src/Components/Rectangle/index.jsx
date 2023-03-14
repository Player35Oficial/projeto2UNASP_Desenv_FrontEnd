import './index.css';

export default function Rectangle({ type, number, icon }) {
  return (
    <div className="rectangle">
      <div>
        <img src={icon} alt={type + '-icon'} />
        <span className="type">{type}</span>
      </div>
      <strong>
        {number}
        <span>/ 100</span>
      </strong>
    </div>
  );
}
