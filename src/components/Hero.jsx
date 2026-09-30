import ExternalLink from './ExternalLink.jsx';

export default function Hero({ contact, layout, profile, siteTheme }) {
  const skills = Object.values(profile.skills).flat().slice(0, 6);
  return (
    <section id="home" className={`section home-section ${layout.id}`}>
      <div className="home-content">
        <p className="eyebrow">{siteTheme.label} / {layout.label}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="home-description">{profile.headline}</p>
        <div className="button-row">
          <ExternalLink className="button primary" href={contact.github}>GitHub</ExternalLink>
          <a className="button secondary" href={`mailto:${contact.email}`}>Email</a>
          <ExternalLink className="button secondary" href={contact.blog}>Blog</ExternalLink>
          <button className="button ghost" type="button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Project</button>
        </div>
        <dl className="hero-meta">
          <div><dt>Focus</dt><dd>{profile.interests.slice(0, 2).join(' / ')}</dd></div>
          <div><dt>Stack</dt><dd>{skills.slice(0, 3).join(', ')}</dd></div>
        </dl>
      </div>
      <div className="profile-visual" aria-label="프로필 이미지 영역">
        <img src={profile.profileImage} alt={`${profile.name} 프로필`} />
        <div className="profile-caption"><span>Portfolio platform</span><strong>{siteTheme.domain}</strong></div>
      </div>
    </section>
  );
}
