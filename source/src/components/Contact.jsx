export default function Contact({ contact }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading"><p className="eyebrow">Contact</p><h2>연락처</h2></div>
      <div className="contact-list">
        <a href={`mailto:${contact.email}`}><span>Email</span>{contact.email}</a>
        <a href={`tel:${contact.phone.replaceAll('-', '')}`}><span>Phone</span>{contact.phone}</a>
        <a href={contact.github} target="_blank" rel="noreferrer"><span>GitHub</span>{contact.github}</a>
        <a href={contact.blog} target="_blank" rel="noreferrer"><span>Blog</span>{contact.blog}</a>
        <a href={contact.sns} target="_blank" rel="noreferrer"><span>SNS</span>{contact.sns}</a>
      </div>
    </section>
  );
}
