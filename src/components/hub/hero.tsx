import { useState } from "react";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
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
        <p className="hero-eyebrow">A field guide for the curious classroom</p>
        <h1 id="hero-title" className="display">African literature, <em>opened</em> for class.</h1>
        <p className="hero-lede">Ten literary works. Real classroom strategies. A bridge between the worlds inside a text and the questions Grade 8 readers bring with them.</p>
        <p className="hero-byline">Tarisai Tara Mabuto <span>· MAEd candidate, Language and Literature</span></p>
        <div className="actions">
          <a className="btn btn-primary" href="#corpus">Explore the collection <span aria-hidden="true">↗</span></a>
          <a className="btn btn-ghost hero-ghost" href="#toolkits">Explore the lesson guide <span aria-hidden="true">◷</span></a>
        </div>
        <p className="hero-footnote">Supplementary resources for Grade 8 English · Revised K to 10 Curriculum</p>
      </div>
      <div className="wrap stats" aria-label="Hub at a glance">
        <p className="stat"><b>10</b><span>selected works</span></p>
        <p className="stat"><b>4</b><span>genre groups in the thesis</span></p>
        <p className="stat"><b>50</b><span>minutes, mapped move by move</span></p>
        <p className="stat"><b>6</b><span>teaching approaches assessed</span></p>
      </div>
    </section>
  );
}
