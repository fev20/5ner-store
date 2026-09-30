export default function About({ profile }) {
  return (
    <section id="about" className="section">
      <div className="section-heading"><p className="eyebrow">About</p><h2>소개와 목표</h2></div>
      <div className="about-layout">
        <article className="text-panel"><h3>자기소개</h3><p>{profile.about}</p></article>
        <article className="text-panel"><h3>활동 목표</h3><p>{profile.goal}</p></article>
      </div>
      <div className="info-grid">
        <article className="text-panel"><h3>관심 분야</h3><ul className="tag-list">{profile.interests.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="text-panel"><h3>핵심 역량</h3><ul className="tag-list">{profile.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
    </section>
  );
}
