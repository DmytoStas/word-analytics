import StatItem from "./StatItem";

export default function Stats({
  nubuerOfChar,
  instagramCharLeft,
  facebookCharLeft,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <ul className="stats-list">
        <li className="stat">
          <StatItem number={numberOfWords} label={"Words"} />
        </li>

        <li className="stat">
          <StatItem number={nubuerOfChar} label={"Characters"} />
        </li>

        <li className="stat">
          <StatItem number={instagramCharLeft} label={"Instagram"} />
        </li>

        <li className="stat">
          <StatItem number={facebookCharLeft} label={"Facebook"} />
        </li>
      </ul>
    </section>
  );
}
