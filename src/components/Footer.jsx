import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      © 2026 Jeremy Shih. All Rights Reserved. &mdash;{' '}
      <a href="#top" onClick={scrollToTop}>Back to top ↑</a>
    </footer>
  );
}
