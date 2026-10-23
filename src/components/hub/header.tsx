import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Overview", "#top"],
  ["Criteria", "#criteria"],
  ["Corpus", "#corpus"],
  ["Toolkits", "#toolkits"],
  ["Access", "#access"],
  ["People", "#contributors"],
  ["Study", "#study"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="rail" />
      <div className="wrap header-bar">
        <a className="brand" href="#top">
          <span className="mark mark-logo"><img src="/images/mmsu-logo.png" alt="Mariano Marcos State University logo" /></span>
          <span><span className="brand-name">African Literature Hub</span><span className="brand-sub">Grade 8 English</span></span>
        </a>
        <div className="header-right-group">
          <nav className="nav-desktop" aria-label="Page">
            {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
          </nav>
          <a href="#corpus" className="header-cta-btn">
            <span>Explore Corpus</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={open ? "nav-panel open" : "nav-panel"}>
        <div className="nav-panel-inner">
          <nav className="wrap nav-mobile" aria-label="Page">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#corpus" className="mobile-cta-btn" onClick={() => setOpen(false)}>
              Explore Corpus <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
