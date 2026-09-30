import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection.js';

export default function Header({ activeLayoutId, layoutOptions, navItems, siteTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateToSection = (id) => { setMenuOpen(false); scrollToSection(id); };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="logo" type="button" onClick={() => navigateToSection('home')}>{siteTheme.label}</button>
        <button className="menu-button" type="button" aria-label="메뉴 열기" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <div className={`header-menu ${menuOpen ? 'open' : ''}`}>
          <nav className="layout-switcher" aria-label="레이아웃 선택">
            {layoutOptions.map((layout) => (
              <NavLink
                key={layout.id}
                className={activeLayoutId === layout.id ? 'active' : ''}
                to={`/${layout.id}`}
                onClick={() => { setMenuOpen(false); window.setTimeout(() => navigateToSection('home'), 0); }}
              >{layout.label}</NavLink>
            ))}
          </nav>
          <nav className="nav-links" aria-label="섹션 이동">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => navigateToSection(item.id)}>{item.label}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
