import { Fragment } from 'react';
import About from '../components/About.jsx';
import Certificates from '../components/Certificates.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import { certificates } from '../data/certificateData.js';
import { layoutOptions, sectionLabels } from '../data/layoutData.js';
import { profile, contact } from '../data/profileData.js';
import { projects } from '../data/projectData.js';
import { resolveTheme } from '../utils/resolveTheme.js';

export default function PortfolioLayout({ layoutId }) {
  const theme = resolveTheme();
  const layout = layoutOptions.find((option) => option.id === layoutId) || layoutOptions[0];
  const navItems = layout.sections.map((id) => ({ id, label: layout.id === 'gallery' && id === 'projects' ? 'Gallery' : sectionLabels[id] }));
  const commonProps = { profile, layout, siteTheme: theme };
  const sections = {
    home: <Hero {...commonProps} contact={contact} />,
    about: <About {...commonProps} />,
    skills: <Skills skills={profile.skills} />,
    projects: <Projects projects={projects} variant={layout.projectVariant} />,
    certificates: <Certificates certificates={certificates} />,
    contact: <Contact contact={contact} />,
  };
  return (
    <div className={`app ${theme.id}`} data-theme={theme.id}>
      <Header activeLayoutId={layout.id} layoutOptions={layoutOptions} navItems={navItems} siteTheme={theme} />
      <main>
        <div className="site-note"><strong>{theme.label}</strong><span>{theme.description}</span></div>
        <div className="layout-note"><strong>{layout.label}</strong><span>{layout.description}</span></div>
        {layout.sections.map((sectionId) => <Fragment key={sectionId}>{sections[sectionId]}</Fragment>)}
      </main>
      <Footer profile={profile} />
      <button className="back-to-top" type="button" aria-label="맨 위로 이동" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>↑</button>
    </div>
  );
}
