import { useEffect, useRef, useState } from "react";

const statTargets = [10, 4, 50, 6];

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [counts, setCounts] = useState(statTargets);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust video playback & ready state detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    // If video already has data or is playing, show it immediately
    if (video.readyState >= 2 || video.currentTime > 0) {
      markReady();
    }

    video.addEventListener("canplay", markReady);
    video.addEventListener("canplaythrough", markReady);
    video.addEventListener("playing", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("timeupdate", () => {
      if (video.currentTime > 0) markReady();
    });

    // Ensure autoplay initiates
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(markReady).catch(() => {
        // Fallback gracefully to poster
      });
    }

    return () => {
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("canplaythrough", markReady);
      video.removeEventListener("playing", markReady);
      video.removeEventListener("loadeddata", markReady);
    };
  }, []);

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
        <img
          src="/images/african-youth.jpg"
          alt="Grade 8 students in Laoag City holding African literature collections"
          width={2752}
          height={1221}
          decoding="async"
        />
        <video
          ref={videoRef}
          className={videoReady ? "hero-video is-ready" : "hero-video"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/african-youth.jpg"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
          tabIndex={-1}
        >
          <source src="/images/african-literature-hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient African Shape Constellation in Hero */}
        <div className="hero-shape-constellation" aria-hidden="true">
          <div className="hero-shape-float shape-float-1">
            <img src="/images/Shapes/African Shape (2).svg" alt="" />
          </div>
          <div className="hero-shape-float shape-float-2">
            <img src="/images/Shapes/African Shape (1).svg" alt="" />
          </div>
        </div>
      </div>

      <div className="wrap hero-content">
        <div className="kicker-group hero-kicker-group">
          <span className="hero-kicker-glyph" aria-hidden="true">
            <img src="/images/Shapes/African Shape (1).svg" alt="" />
          </span>
          <p className="kicker hero-kicker">MMSU Graduate School · Laoag City</p>
        </div>
        <h1 id="hero-title" className="display">
          African Literature, <em>Opened</em> for Class.
        </h1>
        <p className="hero-lede">
          Ten literary works. Real classroom strategies. A bridge between the worlds inside a
          text and the questions Grade 8 readers bring with them.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#corpus">
            Explore the Collection <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn-ghost hero-ghost" href="#toolkits">
            Explore the Lesson Guide <span aria-hidden="true">◷</span>
          </a>
        </div>
        <p className="hero-footnote">
          Supplementary resources for Grade 8 English · Revised K to 10 Curriculum
        </p>
      </div>

      <div className="wrap stats" aria-label="Hub at a glance">
        <p className="stat">
          <span className="stat-overline">The Collection</span>
          <b>{counts[0]}</b>
          <span>Selected Contemporary Works</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Genre Map</span>
          <b>{counts[1]}</b>
          <span>Genre Groups in the Thesis</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Classroom Plan</span>
          <b>{counts[2]}</b>
          <span>Minutes Mapped Move by Move</span>
        </p>
        <p className="stat">
          <span className="stat-overline">Teaching Lenses</span>
          <b>{counts[3]}</b>
          <span>Approaches Assessed in the Thesis</span>
        </p>
      </div>
    </section>
  );
}
