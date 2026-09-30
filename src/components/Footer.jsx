export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <p>{profile.siteName}</p><p>Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.</p><p>Last updated: {profile.lastUpdated}</p>
    </footer>
  );
}
