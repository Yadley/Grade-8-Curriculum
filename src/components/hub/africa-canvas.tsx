import { useEffect, useRef } from "react";

const scenes = [
  { file: "Africa (1).jpg", label: "Land", alt: "African visual study image one, supplied for the literature hub" },
  { file: "Africa (2).jpg", label: "Colour", alt: "African visual study image two, supplied for the literature hub" },
  { file: "Africa (3).jpg", label: "Memory", alt: "African visual study image three, supplied for the literature hub" },
  { file: "Africa (4).jpg", label: "Making", alt: "African visual study image four, supplied for the literature hub" },
  { file: "Africa (5).jpg", label: "Rhythm", alt: "African visual study image five, supplied for the literature hub" },
  { file: "Africa (6).jpg", label: "Tomorrow", alt: "African visual study image six, supplied for the literature hub" },
];

export function AfricaCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = reduced ? 1 : Math.max(0, Math.min(1, -rect.top / travel));
      canvas.style.setProperty("--scroll-progress", progress.toFixed(4));
      canvas.style.setProperty("--canvas-width", (90 + progress * 10).toFixed(2) + "%");
      canvas.style.setProperty("--canvas-radius", (30 * (1 - progress)).toFixed(2) + "px");
      canvas.style.setProperty("--image-scale", (1.09 - progress * 0.09).toFixed(3));
      canvas.style.setProperty("--art-shift", ((1 - progress) * 54).toFixed(1) + "px");
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="africa-canvas" ref={sectionRef} aria-labelledby="africa-canvas-title">
      <div className="africa-canvas-sticky">
        <div className="africa-canvas-frame" ref={canvasRef}>
          <div className="africa-canvas-texture" aria-hidden="true" />
          <div className="africa-canvas-topline">
            <span>Six visual fragments</span>
            <span>One continent. Countless stories.</span>
          </div>
          <div className="africa-canvas-copy">
            <p className="africa-canvas-kicker">Beyond the page</p>
            <h2 id="africa-canvas-title">Africa is not a <em>single story.</em></h2>
            <p>Colour. Place. Memory. Making. Let every text open a door, not close a definition.</p>
            <a href="#corpus" className="africa-canvas-link">Meet the voices <span aria-hidden="true">↗</span></a>
          </div>
          <div className="africa-canvas-art" aria-label="A visual collage of African creativity and culture">
            {scenes.map((scene, index) => (
              <figure className={"africa-art art-" + (index + 1)} key={scene.file}>
                <img src={"/images/" + scene.file} alt={scene.alt} loading="lazy" />
                <figcaption><span>0{index + 1}</span>{scene.label}</figcaption>
              </figure>
            ))}
            <span className="africa-art-stamp" aria-hidden="true">Stories<br />in motion</span>
          </div>
          <div className="africa-canvas-bottomline">
            <span>Read closely. Teach expansively.</span>
            <span aria-hidden="true">↓ Scroll to unfold</span>
          </div>
        </div>
      </div>
    </section>
  );
}
