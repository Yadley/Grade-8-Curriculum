import { useEffect, useRef, useState } from "react";
import { clock, models, organizer } from "@/data/hub";
import {
  AfroChevron,
  AfroRectangle,
  AfroSemiCircle,
  AfroTriangle,
} from "@/components/hub/afro-shapes";

function minutes(value: string) {
  return Number.parseInt(value, 10) || 0;
}

const modelShapes = [
  { icon: "/images/Shapes/African Shape (2).svg", label: "Cultural Heritage", color: "#E0533C" },
  { icon: "/images/Shapes/African Shape (3).svg", label: "Linguistic Structure", color: "#16845B" },
  { icon: "/images/Shapes/African Shape (1).svg", label: "Personal Growth", color: "#F2C94C" },
  { icon: "/images/Shapes/African Shape (4).svg", label: "Textual Analysis", color: "#C44B2E" },
  { icon: "/images/Shapes/African Shape (1).svg", label: "Language Inquiry", color: "#16845B" },
  { icon: "/images/Shapes/African Shape (2).svg", label: "Stylistic Craft", color: "#E0533C" },
];

export function Toolkit() {
  const [openId, setOpenId] = useState(clock[0].id);
  const [activeTab, setActiveTab] = useState<"teacher" | "student" | "guardrail">("teacher");
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Live in-class timer simulation
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  const activeIndex = Math.max(0, clock.findIndex((step) => step.id === openId));
  const activeStep = clock[activeIndex] ?? clock[0];
  const totalMinutes = clock.reduce((total, step) => total + minutes(step.mins), 0);
  const elapsedMinutes = clock
    .slice(0, activeIndex + 1)
    .reduce((total, step) => total + minutes(step.mins), 0);

  // Sync timer when active step changes
  useEffect(() => {
    setTimerRunning(false);
    setTimeLeft(minutes(activeStep.mins) * 60);
  }, [activeStep.id, activeStep.mins]);

  // Countdown timer tick
  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const copyPromptText = () => {
    navigator.clipboard.writeText(activeStep.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handlePrevStage = () => {
    if (activeIndex > 0) {
      setOpenId(clock[activeIndex - 1].id);
    }
  };

  const handleNextStage = () => {
    if (activeIndex < clock.length - 1) {
      setOpenId(clock[activeIndex + 1].id);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="block toolkit-enhanced-section" id="toolkits" aria-labelledby="toolkit-title">
      {/* Bold Full-Color African Geometric Shapes Scattered Dynamically */}
      <div className="toolkit-shapes-scatter" aria-hidden="true">
        <div className="toolkit-shape-float shape-tl">
          <AfroSemiCircle color="#F2C94C" size={110} rotation={180} />
          <AfroTriangle color="#E0533C" size={62} rotation={45} />
        </div>
        <div className="toolkit-shape-float shape-tr">
          <AfroRectangle color="#16845B" width={78} height={42} rotation={-12} />
          <AfroChevron color="#C44B2E" size={64} rotation={0} />
        </div>
        <div className="toolkit-shape-float shape-mid-right">
          <AfroSemiCircle color="#E0533C" size={96} rotation={270} />
          <AfroTriangle color="#F2C94C" size={54} rotation={-20} />
        </div>
        <div className="toolkit-shape-float shape-bl">
          <AfroRectangle color="#F2C94C" width={68} height={36} rotation={18} />
          <AfroSemiCircle color="#16845B" size={84} rotation={90} />
        </div>
      </div>

      <div className="wrap">
        <div className="toolkit-hero-head">
          <div className="block-head">
            <div className="kicker-group">
              <span className="kicker-shape" aria-hidden="true">
                <AfroSemiCircle color="#E0533C" size={26} rotation={180} />
              </span>
              <p className="kicker">Pedagogical Toolkits</p>
            </div>
            <h2 id="toolkit-title" className="section-title">
              Six Teaching Approaches. One Adaptable Lesson Sequence.
            </h2>
            <p className="lede">
              Carter and Long established three foundational models in 1991: cultural, language, and
              personal growth. The interactive sequence below operationalizes these through six
              concrete teaching moves designed for 50-minute secondary periods.
            </p>
          </div>

          {/* Editorial Classroom Hero Visual Card */}
          <div className="toolkit-hero-visual-card" aria-label="Classroom pedagogical demonstration">
            <div className="toolkit-hero-img-wrap">
              <img
                src="/images/Filipino Teacher (2).jpg"
                alt="Filipino secondary English teacher facilitating an active literary reading session"
                className="toolkit-hero-img"
              />
              <div className="toolkit-hero-badge" aria-hidden="true">
                <AfroTriangle color="#E0533C" size={16} rotation={15} />
                <span>Classroom In Practice</span>
              </div>
            </div>
            <div className="toolkit-hero-caption">
              <strong>DepEd English 8 · Secondary Period Architecture</strong>
              <p>Translating literary theory into adaptable 50-minute secondary lesson sequences.</p>
            </div>
          </div>
        </div>

        {/* Informative Guidance Aside */}
        <aside className="clock-guide-enhanced" aria-labelledby="clock-guide-title">
          <div className="guide-icon-badge" aria-hidden="true">
            <img src="/images/Shapes/African Shape (2).svg" alt="" />
          </div>
          <div>
            <h3 id="clock-guide-title">How Should a Teacher Use This?</h3>
            <p>
              Treat the sequence as an adaptable roadmap rather than a rigid script. Select any
              stage to inspect the teacher move, the student activity, and classroom prompts. In the
              room, you lead the discussion while learners read, annotate, or debate.
            </p>
            <div className="clock-guide-tags">
              <span className="guide-pill">✦ 50-Minute Adaptable Sequence</span>
              <span className="guide-pill">✦ Works With Any Authorized Text</span>
              <span className="guide-pill">✦ Formative Assessment Built In</span>
            </div>
          </div>
        </aside>

        {/* Carter & Long Models & 6 Teaching Approaches Cards */}
        <div className="models-enhanced-grid" aria-label="Six Teaching Approaches Assessed">
          {models.map((model, idx) => {
            const meta = modelShapes[idx] || modelShapes[0];
            return (
              <article
                key={model.name}
                className="model-card-enhanced"
                style={{ "--model-accent": meta.color } as React.CSSProperties}
              >
                <div className="model-top-row">
                  <span className="model-cite-tag">{model.cite}</span>
                  <div className="model-geometric-icon" title={meta.label} aria-hidden="true">
                    {idx % 4 === 0 && <AfroSemiCircle color={meta.color} size={28} rotation={180} />}
                    {idx % 4 === 1 && <AfroTriangle color={meta.color} size={26} rotation={0} />}
                    {idx % 4 === 2 && <AfroRectangle color={meta.color} width={28} height={18} />}
                    {idx % 4 === 3 && <AfroChevron color={meta.color} size={26} />}
                  </div>
                </div>
                <h3>{model.name}</h3>
                <p>{model.body}</p>
                <div className="model-accent-bar" style={{ backgroundColor: meta.color }} />
              </article>
            );
          })}
        </div>

        {/* Lesson Sequence Timeline & Live Progress Bar */}
        <div className="clock-timeline-bar" aria-label="Suggested 50-minute timeline">
          <div className="clock-timeline-header">
            <div>
              <span className="timeline-kicker">Lesson Progression</span>
              <strong>Active: Stage {activeIndex + 1} — {activeStep.title}</strong>
            </div>
            <div className="timeline-meta-right">
              <span className="timeline-time-badge">
                {elapsedMinutes} of {totalMinutes} min ({Math.round((elapsedMinutes / totalMinutes) * 100)}%)
              </span>
            </div>
          </div>

          <div
            className="clock-progress-track-enhanced"
            role="progressbar"
            aria-label="Progress in 50-minute lesson"
            aria-valuenow={elapsedMinutes}
            aria-valuemin={0}
            aria-valuemax={totalMinutes}
          >
            <div
              className="clock-progress-fill-enhanced"
              style={{ width: `${(elapsedMinutes / totalMinutes) * 100}%` }}
            />
          </div>

          {/* Quick Stage Selector Chips */}
          <div className="stage-selector-chips" role="tablist" aria-label="Lesson stages">
            {clock.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={openId === step.id}
                className={`stage-chip-btn ${openId === step.id ? "is-selected" : ""}`}
                onClick={() => setOpenId(step.id)}
              >
                <span className="chip-num">0{idx + 1}</span>
                <span className="chip-title">{step.title}</span>
                <span className="chip-mins">{step.mins}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Master Interactive Visual Showcase: Split between Rich Image Rows and Stage Sandbox */}
        <div className="toolkit-interactive-studio">
          {/* Left Column: All 6 Clock Rows with Rich Visual Imagery */}
          <div className="clock-rows-panel" aria-label="Lesson sequence stages">
            <h3 className="panel-subhead">
              <span>The 6 Lesson Stages</span>
              <span className="subhead-hint">Click any stage to preview</span>
            </h3>

            <div className="clock-rows-list">
              {clock.map((step, index) => {
                const isSelected = openId === step.id;
                const startMin = clock
                  .slice(0, index)
                  .reduce((sum, item) => sum + minutes(item.mins), 0);

                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`clock-row-card ${isSelected ? "is-active" : ""}`}
                    onClick={() => setOpenId(step.id)}
                    aria-expanded={isSelected}
                  >
                    {/* Rich Thumbnail Photo with Afro Geometric Badge */}
                    <div
                      className="clock-row-thumb"
                      style={{
                        width: "80px",
                        minWidth: "80px",
                        maxWidth: "80px",
                        height: "68px",
                        minHeight: "68px",
                        maxHeight: "68px",
                        flexShrink: 0,
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <span className="clock-row-step-num">0{index + 1}</span>
                    </div>

                    <div className="clock-row-details">
                      <div className="clock-row-top">
                        <h4 className="clock-row-title">{step.title}</h4>
                        <span className="clock-row-duration">{step.mins}</span>
                      </div>

                      <div className="clock-row-meta">
                        <span className="clock-row-model-badge">{step.model}</span>
                        <span className="clock-row-timeframe">
                          {startMin}–{startMin + minutes(step.mins)} min
                        </span>
                      </div>

                      <p className="clock-row-summary">{step.badge}</p>
                    </div>

                    <span className="clock-row-arrow" aria-hidden="true">
                      {isSelected ? "●" : "→"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Classroom Sandbox & Live Timer Studio */}
          <div className="active-stage-sandbox">
            <div className="sandbox-header-media">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="sandbox-hero-img"
              />
              <div className="sandbox-hero-overlay" />

              <div className="sandbox-floating-badge">
                <span className="badge-stage-tag">Stage 0{activeIndex + 1} of 06</span>
                <span className="badge-model-tag">{activeStep.model}</span>
              </div>

              <div className="sandbox-title-overlay">
                <h3>{activeStep.title}</h3>
                <p>{activeStep.badge}</p>
              </div>
            </div>

            {/* In-Class Live Countdown Timer Widget */}
            <div className="sandbox-timer-widget">
              <div className="timer-display-col">
                <span className="timer-label">Classroom Period Timer</span>
                <span className="timer-digits">{formatTime(timeLeft)}</span>
              </div>

              <div className="timer-controls-col">
                <button
                  type="button"
                  className={`btn-timer-action ${timerRunning ? "btn-pause" : "btn-start"}`}
                  onClick={() => setTimerRunning((r) => !r)}
                >
                  {timerRunning ? "⏸ Pause" : "▶ Start " + activeStep.mins}
                </button>
                <button
                  type="button"
                  className="btn-timer-reset"
                  onClick={() => {
                    setTimerRunning(false);
                    setTimeLeft(minutes(activeStep.mins) * 60);
                  }}
                  title="Reset stage timer"
                >
                  ↺ Reset
                </button>
              </div>
            </div>

            {/* Interactive Tabbed Content (Teacher Move vs Student Move vs Guardrail) */}
            <div className="sandbox-tab-bar" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "teacher"}
                className={`sandbox-tab ${activeTab === "teacher" ? "is-tab-active" : ""}`}
                onClick={() => setActiveTab("teacher")}
              >
                👨‍🏫 Teacher Move
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "student"}
                className={`sandbox-tab ${activeTab === "student" ? "is-tab-active" : ""}`}
                onClick={() => setActiveTab("student")}
              >
                ✍️ Student Activity
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "guardrail"}
                className={`sandbox-tab ${activeTab === "guardrail" ? "is-tab-active" : ""}`}
                onClick={() => setActiveTab("guardrail")}
              >
                🛡️ Cultural Care
              </button>
            </div>

            <div className="sandbox-tab-body">
              {activeTab === "teacher" && (
                <div className="tab-pane-content">
                  <span className="pane-lead">What the Educator Does:</span>
                  <p>{activeStep.body}</p>
                </div>
              )}
              {activeTab === "student" && (
                <div className="tab-pane-content">
                  <span className="pane-lead">What Grade 8 Learners Produce:</span>
                  <p>{activeStep.studentMove}</p>
                </div>
              )}
              {activeTab === "guardrail" && (
                <div className="tab-pane-content">
                  <span className="pane-lead">Intercultural Guardrail:</span>
                  <p>
                    Ensure learners do not treat this single reading as an exhaustive representation
                    of all African peoples. Ground every statement in concrete quotes from the
                    authorized text.
                  </p>
                </div>
              )}
            </div>

            {/* Suggested Classroom Prompt Box with Copy Tool */}
            <div className="sandbox-prompt-box">
              <div className="prompt-header">
                <span className="prompt-label">Ready-to-Use Classroom Prompt:</span>
                <button
                  type="button"
                  className="btn-copy-prompt"
                  onClick={copyPromptText}
                  title="Copy prompt for blackboard or slides"
                >
                  {copiedPrompt ? "Copied ✓" : "📋 Copy Prompt"}
                </button>
              </div>
              <blockquote className="prompt-quote">
                “{activeStep.prompt}”
              </blockquote>
            </div>

            {/* Navigation Buttons Between Stages */}
            <div className="sandbox-nav-footer">
              <button
                type="button"
                className="btn-stage-nav"
                onClick={handlePrevStage}
                disabled={activeIndex === 0}
              >
                ← Previous Stage
              </button>
              <span className="nav-step-counter">
                Stage {activeIndex + 1} of {clock.length}
              </span>
              <button
                type="button"
                className="btn-stage-nav"
                onClick={handleNextStage}
                disabled={activeIndex === clock.length - 1}
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>

        {/* Graphic Organizer: Worked Example Visual Board */}
        <div className="organizer-visual-board">
          <div className="organizer-head-row">
            <div>
              <p className="kicker">Graphic Organizer · Worked Example</p>
              <h3 className="subhead">From Text Evidence to a Careful Connection</h3>
              <p className="organizer-desc">
                How a teacher guides students from concrete literary details to valid intercultural
                inquiry without stereotyping.
              </p>
            </div>
            <div className="organizer-motif" aria-hidden="true">
              <img src="/images/Shapes/African Shape (1).svg" alt="" />
            </div>
          </div>

          <div className="organizer-cards-grid">
            {organizer.map((row, index) => {
              const colors = ["#E0533C", "#16845B", "#F2C94C"];
              const icons = ["📖", "🌍", "🌉"];
              return (
                <div
                  key={row.text}
                  className="organizer-column-card"
                  style={{ "--col-color": colors[index] } as React.CSSProperties}
                >
                  <div className="col-top-badge">
                    <span className="col-icon">{icons[index]}</span>
                    <span className="col-step-label">Step 0{index + 1}</span>
                  </div>
                  <h4>{row.text}</h4>
                  <div className="col-divider" />
                  <span className="col-near-label">Guiding Question:</span>
                  <p>{row.near}</p>
                </div>
              );
            })}
          </div>

          <p className="fine organizer-footer-fine">
            Each dossier on this hub provides its own tailored graphic bridge. This example is
            pre-filled so teachers can model the comparative routine before assigning independent
            student work.
          </p>
        </div>
      </div>
    </section>
  );
}
