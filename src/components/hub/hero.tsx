import { useEffect, useState } from "react";

const statTargets = [10, 4, 50, 6];

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [counts, setCounts] = useState(statTargets);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(statTargets);
      return;
    }
    setCounts([0, 0, 0, 0]);
    const node = document.querySelector(".hero-cinematic .stats");
    if (!node) {
      setCounts(statTargets);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(statTargets.map((target) => Math.round(target * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section className="hero hero-cinematic" id="top" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <img src="/images/african-youth.jpg" alt="" width={1600} height={1067} />
        <video className={videoReady ? "hero-video is-ready" : "hero-video"} autoPlay muted loop playsInline preload="metadata" poster="/images/african-youth.jpg" onCanPlay={() => setVideoReady(true)} onError={(event) => { event.currentTarget.style.display = "none"; }} tabIndex={-1}>
          <source src="/images/african-literature-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="wrap hero-content">
        <p className="kicker hero-kicker">MMSU Graduate School · Laoag City</p>
        <h1 id="hero-title" className="display">African literature, <em>opened</em> for class.</h1>
        <p className="hero-lede">Ten literary works. Real classroom strategies. A bridge between the worlds inside a text and the questions Grade 8 readers bring with them.</p>
        <div className="actions">
          <a className="btn btn-primary" href="#corpus">Explore the collection <span aria-hidden="true">↗</span></a>
          <a className="btn btn-ghost hero-ghost" href="#toolkits">Explore the lesson guide <span aria-hidden="true">◷</span></a>
        </div>
        <p className="hero-footnote">Supplementary resources for Grade 8 English · Revised K to 10 Curriculum</p>
      </div>
      <div className="wrap stats" aria-label="Hub at a glance">
        <p className="stat">
          <span className="stat-overline">The collection</span>
          <b>{counts[0]}</b>
          <span>selected literary works</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Genre map</span>
          <b>{counts[1]}</b>
          <span>genre groups in the thesis</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Classroom plan</span>
          <b>{counts[2]}</b>
          <span>minutes mapped move by move</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Teaching lenses</span>
          <b>{counts[3]}</b>
          <span>approaches assessed in the thesis</span>
        </p>
      </div>
    </section>
  );
}
