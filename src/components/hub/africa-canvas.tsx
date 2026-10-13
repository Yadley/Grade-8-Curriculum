import { useEffect, useRef, useState, type PointerEvent } from "react";

interface SceneItem {
  id: string;
  file: string;
  label: string;
  alt: string;
  quote: string;
  originalIndex: number;
}

const initialScenes: SceneItem[] = [
  { id: "art-1", file: "Africa (1).jpg", label: "Land", alt: "African visual study image one, supplied for the literature hub", quote: "The soil remembers what textbooks compress.", originalIndex: 1 },
  { id: "art-2", file: "Africa (2).jpg", label: "Colour", alt: "African visual study image two, supplied for the literature hub", quote: "Textile, ochre, indigo — living visual syntax.", originalIndex: 2 },
  { id: "art-3", file: "Africa (3).jpg", label: "Memory", alt: "African visual study image three, supplied for the literature hub", quote: "Oral inheritance carried across generations.", originalIndex: 3 },
  { id: "art-4", file: "Africa (4).jpg", label: "Making", alt: "African visual study image four, supplied for the literature hub", quote: "Craft as philosophical inquiry and community work.", originalIndex: 4 },
  { id: "art-5", file: "Africa (5).jpg", label: "Rhythm", alt: "African visual study image five, supplied for the literature hub", quote: "Polyphonic cadences in prose, poetry, and song.", originalIndex: 5 },
  { id: "art-6", file: "Africa (6).jpg", label: "Tomorrow", alt: "African visual study image six, supplied for the literature hub", quote: "Afrofuturist imagination and sovereign futures.", originalIndex: 6 },
];

export function AfricaCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reorderable list of scenes
  const [items, setItems] = useState<SceneItem[]>(initialScenes);
  // Freeform drag offsets per item id
  const [offsets, setOffsets] = useState<Record<string, { x: number; y: number }>>({});
  // Active dragging state
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragHoverTarget, setDragHoverTarget] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<SceneItem | null>(null);
  const [viewMode, setViewMode] = useState<"collage" | "grid">("collage");

  // Drag tracking refs
  const dragStartRef = useRef<{ pointerX: number; pointerY: number; initialOffsetX: number; initialOffsetY: number } | null>(null);
  const hasMovedRef = useRef(false);

  // Scroll animation effect
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

  // Pointer drag start
  const handlePointerDown = (e: PointerEvent<HTMLElement>, item: SceneItem) => {
    // Left click or touch only
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);

    const currentOffset = offsets[item.id] || { x: 0, y: 0 };
    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      initialOffsetX: currentOffset.x,
      initialOffsetY: currentOffset.y,
    };
    hasMovedRef.current = false;
    setDraggingId(item.id);
  };

  // Pointer drag move
  const handlePointerMove = (e: PointerEvent<HTMLElement>, item: SceneItem) => {
    if (!dragStartRef.current || draggingId !== item.id) return;
    const deltaX = e.clientX - dragStartRef.current.pointerX;
    const deltaY = e.clientY - dragStartRef.current.pointerY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      hasMovedRef.current = true;
    }

    const nextX = dragStartRef.current.initialOffsetX + deltaX;
    const nextY = dragStartRef.current.initialOffsetY + deltaY;

    setOffsets((prev) => ({
      ...prev,
      [item.id]: { x: nextX, y: nextY },
    }));

    // Detect if hovering over another item to swap/sort
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pointerX = e.clientX;
      const pointerY = e.clientY;

      const elements = document.elementsFromPoint(pointerX, pointerY);
      const hoveredFigure = elements.find(
        (el) => el.classList.contains("africa-art") && el.getAttribute("data-id") !== item.id,
      );

      if (hoveredFigure) {
        const hoverId = hoveredFigure.getAttribute("data-id");
        setDragHoverTarget(hoverId);
      } else {
        setDragHoverTarget(null);
      }
    }
  };

  // Pointer drag end (swap or release)
  const handlePointerUp = (e: PointerEvent<HTMLElement>, item: SceneItem) => {
    if (draggingId !== item.id) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }

    // If dragged over another item, swap their order!
    if (dragHoverTarget && dragHoverTarget !== item.id) {
      setItems((prev) => {
        const sourceIndex = prev.findIndex((i) => i.id === item.id);
        const targetIndex = prev.findIndex((i) => i.id === dragHoverTarget);
        if (sourceIndex === -1 || targetIndex === -1) return prev;
        const next = [...prev];
        const [removed] = next.splice(sourceIndex, 1);
        next.splice(targetIndex, 0, removed);
        return next;
      });

      // Clear the custom offset on swap so it snaps into the new slot smoothly
      setOffsets((prev) => {
        const next = { ...prev };
        delete next[item.id];
        delete next[dragHoverTarget];
        return next;
      });
    }

    // If it was just a click (not a drag), open preview modal
    if (!hasMovedRef.current) {
      setActiveStory(item);
    }

    setDraggingId(null);
    setDragHoverTarget(null);
    dragStartRef.current = null;
  };

  const handlePointerCancel = () => {
    setDraggingId(null);
    setDragHoverTarget(null);
    dragStartRef.current = null;
  };

  // Sorting utilities
  const handleSortSequential = () => {
    setItems((prev) => [...prev].sort((a, b) => a.originalIndex - b.originalIndex));
    setOffsets({});
  };

  const handleSortShuffle = () => {
    setItems((prev) => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setOffsets({});
  };

  const handleResetPositions = () => {
    setOffsets({});
    setItems(initialScenes);
  };

  // Keyboard reordering
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (index < items.length - 1) {
        setItems((prev) => {
          const next = [...prev];
          const [moved] = next.splice(index, 1);
          next.splice(index + 1, 0, moved);
          return next;
        });
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (index > 0) {
        setItems((prev) => {
          const next = [...prev];
          const [moved] = next.splice(index, 1);
          next.splice(index - 1, 0, moved);
          return next;
        });
      }
    }
  };

  return (
    <section className="africa-canvas" ref={sectionRef} aria-labelledby="africa-canvas-title">
      <div className="africa-canvas-sticky">
        <div className="africa-canvas-frame" ref={canvasRef}>
          {/* Subtle Continental Watermark Texture */}
          <div className="africa-canvas-texture" aria-hidden="true" />
          <div className="africa-canvas-watermark" aria-hidden="true">
            <img src="/images/Shapes/Africa.svg" alt="" />
          </div>

          {/* Topline Bar */}
          <div className="africa-canvas-topline">
            <div className="topline-left">
              <span className="topline-glyph" aria-hidden="true">
                <img src="/images/Shapes/African Shape (1).svg" alt="" />
              </span>
              <span>Six Visual Fragments</span>
            </div>
            <span>One Continent. Countless Stories.</span>
          </div>

          {/* Editorial Headline & Interactive Curation Controls */}
          <div className="africa-canvas-copy">
            <div className="canvas-kicker-row">
              <p className="africa-canvas-kicker">Beyond the Page</p>
              <span className="canvas-interactive-pill">✦ Draggable & Sortable</span>
            </div>
            <h2 id="africa-canvas-title">
              Africa Is Not a <em>Single Story.</em>
            </h2>
            <p>
              Colour. Place. Memory. Making. Drag any piece across the canvas or drop over another
              slot to curate your own perspective.
            </p>

            {/* Interactive Curation Toolbar */}
            <div className="canvas-curator-toolbar" role="toolbar" aria-label="Exhibition layout controls">
              <span className="curator-toolbar-label">Curate Layout:</span>
              <div className="curator-btn-group">
                <button
                  type="button"
                  className={`curator-btn ${viewMode === "collage" ? "is-active" : ""}`}
                  onClick={() => setViewMode("collage")}
                  title="Switch to asymmetrical editorial collage"
                >
                  Collage View
                </button>
                <button
                  type="button"
                  className={`curator-btn ${viewMode === "grid" ? "is-active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  title="Switch to balanced gallery grid"
                >
                  Grid View
                </button>
                <button
                  type="button"
                  className="curator-btn"
                  onClick={handleSortShuffle}
                  title="Remix the narrative order"
                >
                  🔀 Remix Order
                </button>
                <button
                  type="button"
                  className="curator-btn"
                  onClick={handleSortSequential}
                  title="Sort 01 through 06 sequentially"
                >
                  🔢 Sort 01–06
                </button>
                <button
                  type="button"
                  className="curator-btn curator-btn-ghost"
                  onClick={handleResetPositions}
                  title="Reset positions and arrangement"
                >
                  ↺ Reset Order
                </button>
              </div>
            </div>

            <div className="canvas-cta-row">
              <a href="#corpus" className="africa-canvas-link">
                Meet the Voices <span aria-hidden="true">↗</span>
              </a>
              <span className="canvas-drag-hint">
                <span className="drag-hand-icon" aria-hidden="true">✋</span> Click & drag any piece to reorder
              </span>
            </div>
          </div>

          {/* Interactive Draggable & Sortable Art Collage Canvas */}
          <div
            className={`africa-canvas-art ${viewMode === "grid" ? "is-grid-layout" : "is-collage-layout"}`}
            ref={containerRef}
            role="list"
            aria-label="Interactive draggable collage of African culture and landscapes"
          >
            {items.map((scene, index) => {
              const isDragging = draggingId === scene.id;
              const isTarget = dragHoverTarget === scene.id;
              const offset = offsets[scene.id] || { x: 0, y: 0 };
              const positionClass = `slot-${index + 1}`;

              return (
                <figure
                  key={scene.id}
                  data-id={scene.id}
                  role="listitem"
                  tabIndex={0}
                  className={`africa-art ${positionClass} ${isDragging ? "is-dragging" : ""} ${isTarget ? "is-drop-target" : ""}`}
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) translateY(var(--art-shift, 54px)) rotate(var(--tilt, 0deg)) ${isDragging ? "scale(1.08)" : ""}`,
                    zIndex: isDragging ? 50 : isTarget ? 30 : index + 2,
                  }}
                  onPointerDown={(e) => handlePointerDown(e, scene)}
                  onPointerMove={(e) => handlePointerMove(e, scene)}
                  onPointerUp={(e) => handlePointerUp(e, scene)}
                  onPointerCancel={handlePointerCancel}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-label={`${scene.label}: ${scene.quote}. Drag or use arrow keys to sort.`}
                >
                  <div className="africa-art-inner">
                    <img src={"/images/" + scene.file} alt={scene.alt} loading="lazy" draggable={false} />
                    <figcaption>
                      <span>0{index + 1}</span>
                      {scene.label}
                    </figcaption>
                    <span className="art-drag-pill" aria-hidden="true">
                      Drag to sort
                    </span>
                  </div>

                  {/* Drop target visual indicator halo */}
                  {isTarget && (
                    <div className="drop-target-glow" aria-hidden="true">
                      <span>Swap here</span>
                    </div>
                  )}
                </figure>
              );
            })}

            {/* Interactive "Stories in motion" Floating Seal */}
            <button
              type="button"
              className="africa-art-stamp"
              onClick={handleSortShuffle}
              title="Click to remix stories"
              aria-label="Click to remix story sequence"
            >
              <span>
                Stories
                <br />
                in motion
              </span>
              <small>Click to remix</small>
            </button>
          </div>

          {/* Bottomline Navigation */}
          <div className="africa-canvas-bottomline">
            <div className="bottomline-left">
              <span className="bottomline-shape" aria-hidden="true">
                <img src="/images/Shapes/African Shape (3).svg" alt="" />
              </span>
              <span>Read closely. Teach expansively.</span>
            </div>
            <span aria-hidden="true">↓ Scroll to unfold</span>
          </div>
        </div>
      </div>

      {/* Expanded Story Lightbox / Modal */}
      {activeStory && (
        <div
          className="canvas-lightbox-backdrop"
          onClick={() => setActiveStory(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="canvas-lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="canvas-lightbox-close"
              onClick={() => setActiveStory(null)}
              aria-label="Close story preview"
            >
              ✕
            </button>
            <div className="canvas-lightbox-media">
              <img src={"/images/" + activeStory.file} alt={activeStory.alt} />
            </div>
            <div className="canvas-lightbox-copy">
              <span className="kicker">Fragment 0{activeStory.originalIndex}</span>
              <h3 id="lightbox-title">{activeStory.label}</h3>
              <p className="lightbox-quote">“{activeStory.quote}”</p>
              <p className="lightbox-desc">
                From the visual archives curated for the Grade 8 African Literature Hub. Part of
                an ongoing inquiry into how aesthetic forms, landscape, and oral histories shape
                literary expression.
              </p>
              <div className="lightbox-actions">
                <a href="#corpus" className="btn btn-primary" onClick={() => setActiveStory(null)}>
                  Explore related works
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => setActiveStory(null)}>
                  Return to canvas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
