import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      Crafted with care by Alex Rivera &mdash;{' '}
      <a href="#top" onClick={scrollToTop}>Back to top ↑</a>
    </footer>
  );
}
