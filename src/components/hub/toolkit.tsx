import { useState } from "react";
import { clock, models, organizer } from "@/data/hub";

function minutes(value: string) {
  return Number.parseInt(value, 10) || 0;
}

const modelShapes = [
  { icon: "/images/Shapes/African Shape (2).svg", label: "Cultural Heritage" },
  { icon: "/images/Shapes/African Shape (3).svg", label: "Linguistic Structure" },
  { icon: "/images/Shapes/African Shape (1).svg", label: "Personal Growth" },
];

export function Toolkit() {
  const [openId, setOpenId] = useState(clock[0].id);
  const activeIndex = Math.max(0, clock.findIndex((step) => step.id === openId));
  const activeStep = clock[activeIndex] ?? clock[0];
  const totalMinutes = clock.reduce((total, step) => total + minutes(step.mins), 0);
  const elapsedMinutes = clock.slice(0, activeIndex + 1).reduce((total, step) => total + minutes(step.mins), 0);

  return (
    <section className="block" id="toolkits" aria-labelledby="toolkit-title">
      <div className="wrap">
        <div className="block-head">
          <div className="kicker-group">
            <span className="kicker-shape" aria-hidden="true">
              <img src="/images/Shapes/African Shape (3).svg" alt="" />
            </span>
            <p className="kicker">Pedagogical toolkits</p>
          </div>
          <h2 id="toolkit-title" className="section-title">
            Six teaching approaches. One adaptable lesson sequence.
          </h2>
          <p className="lede">
            Carter and Long named three models in 1991: cultural, language, and personal growth.
            The clock below is a suggested classroom sequence that draws on those models. It is
            not a separate assignment, quiz, or fourth model.
          </p>
        </div>

        <aside className="clock-guide" aria-labelledby="clock-guide-title">
          <span className="clock-guide-icon" aria-hidden="true">↗</span>
          <div>
            <h3 id="clock-guide-title">How should a teacher use this?</h3>
            <p>
              Treat the clock as a ready-to-adapt lesson plan, not an activity teachers must do on
              this website. Choose a stage to see a suggested classroom move. In class, the teacher
              guides the conversation and students read, talk, or write. Keep the sequence, shorten
              it, or skip a stage to fit your learners and available time.
            </p>
            <p className="clock-guide-key">
              <b>Each stage answers:</b> What the teacher does · What students do · Why it helps
            </p>
          </div>
        </aside>

        {/* The 3 Carter & Long Models with African Geometric Insignias */}
        <div className="models">
          {models.map((model, idx) => {
            const shape = modelShapes[idx] || modelShapes[0];
            return (
              <article key={model.name} className="model">
                <div className="model-head-row">
                  <p className="kicker">{model.cite}</p>
                  <div className="model-shape-badge" title={shape.label} aria-hidden="true">
                    <img src={shape.icon} alt="" />
                  </div>
                </div>
                <h3>{model.name}</h3>
                <p>{model.body}</p>
              </article>
            );
          })}
        </div>

        <div className="clock-progress" aria-label="Lesson sequence overview">
          <div className="clock-progress-top">
            <strong>Selected stage: {activeStep.title}</strong>
            <span>
              Stage {activeIndex + 1} of {clock.length} · {elapsedMinutes} of {totalMinutes} min elapsed
            </span>
          </div>
          <div
            className="clock-progress-track"
            role="progressbar"
            aria-label="Position in the suggested lesson"
            aria-valuemin={0}
            aria-valuemax={totalMinutes}
            aria-valuenow={elapsedMinutes}
            aria-valuetext={elapsedMinutes + " of " + totalMinutes + " minutes through the suggested lesson"}
          >
            <div className="clock-progress-fill" style={{ width: (elapsedMinutes / totalMinutes) * 100 + "%" }} />
          </div>
        </div>

        <div className="clock" aria-label="Choose a stage of the suggested lesson">
          {clock.map((step, index) => {
            const open = openId === step.id;
            const startMinute = clock.slice(0, index).reduce((total, item) => total + minutes(item.mins), 0);
            return (
              <button
                key={step.id}
                type="button"
                className="clock-item"
                aria-expanded={open}
                onClick={() => setOpenId(step.id)}
              >
                <span className="clock-top">
                  <b>{step.title}</b>
                  <span className="mins">{step.mins}</span>
                </span>
                <span className="model-tag">
                  {step.model} · {startMinute}–{startMinute + minutes(step.mins)} min
                </span>
                {open ? (
                  <span className="clock-step-detail">
                    <span className="clock-step-label">Suggested teacher move</span>
                    <span className="clock-step-body">{step.body}</span>
                    <span className="clock-step-hint">Adapt this move to the selected literary work and your class.</span>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="organizer">
          <div>
            <p className="kicker">Graphic organizer · worked example</p>
            <h3 className="subhead">From text evidence to a careful connection</h3>
          </div>
          {organizer.map((row) => (
            <div key={row.text} className="pair">
              <p>
                <span>In the text</span>
                {row.text}
              </p>
              <p>
                <span>Near us</span>
                {row.near}
              </p>
            </div>
          ))}
          <p className="fine">
            Each dossier carries its own bridge. This one is filled in so a teacher can see the
            comparison before asking students to make one.
          </p>
        </div>
      </div>
    </section>
  );
}
