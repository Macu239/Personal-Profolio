import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-orb" />
      <div className="hero-orb2" />
      <div className="hero-inner">
        {/* Left: text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            CS student @ UCSD
          </div>
          <h1 className="hero-name">
            Still <em>learning</em>, always building.
          </h1>
          <p className="hero-sub">
            I’m driven by curiosity and the process of building—learning
            quickly, adapting to new challenges, and working with others to turn
            ideas into real products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View my work →
            </a>
            <a href="#contact" className="btn-ghost">
              Say hello
            </a>
          </div>
        </div>

        {/* Right: avatar + stats */}
        <div className="hero-right">
          <div className="avatar-wrap">
            <div className="avatar-ring-outer" />
            <div className="avatar-ring-dashed" />
            <div className="avatar-circle">
              <div className="avatar-glow" />
              <img className="personalPic" src="/Me.jpg" alt="Jeremy Shih" />
            </div>
          </div>

          <div className="status-pill">
            <span className="pulse-dot" />
            Open to opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
