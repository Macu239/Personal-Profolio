import './Navbar.css';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <a className="nav-logo" href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
        Jeremy <span>Shih</span>
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={(e) => handleScroll(e, link.toLowerCase())}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
