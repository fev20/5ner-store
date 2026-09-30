export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="section-heading"><p className="eyebrow">Skills</p><h2>기술 스택</h2></div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <article className="skill-card" key={category}><h3>{category}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>
        ))}
      </div>
    </section>
  );
}
