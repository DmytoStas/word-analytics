export default function StatItem({ number, label }) {
  return (
    <>
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="secomd-heading">{label}</h2>
    </>
  );
}
