export default function ExternalLink({ children, href, className = '' }) {
  return href ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <span className={`disabled-link ${className}`}>{children}</span>
  );
}
