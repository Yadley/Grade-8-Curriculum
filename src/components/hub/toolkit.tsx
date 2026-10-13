import { useState } from "react";
import { clock, models, organizer } from "@/data/hub";

function minutes(value: string) {
  return Number.parseInt(value, 10) || 0;
}

export function Toolkit() {
  const [openId, setOpenId] = useState(clock[0].id);
  const activeIndex = Math.max(0, clock.findIndex((step) => step.id === openId));
  const activeStep = clock[activeIndex] ?? clock[0];
  const totalMinutes = clock.reduce((total, step) => total + minutes(step.mins), 0);
  const elapsedMinutes = clock
    .slice(0, activeIndex + 1)
    .reduce((total, step) => total + minutes(step.mins), 0);

  return (
    <section className="block" id="toolkits" aria-labelledby="toolkit-title">
      <div className="wrap">
        <div className="block-head">
          <p className="kicker">Pedagogical toolkits</p>
          <h2 id="toolkit-title" className="section-title">
            Three models. Six moves. One period.
          </h2>
          <p className="lede">
            Carter and Long named three models in 1991: cultural, language, and personal growth.
            The clock below is a classroom sequence drawn from those models. It is not a fourth,
            fifth, and sixth model wearing their names.
          </p>
        </div>
        <div className="models">
          {models.map((model) => (
            <article key={model.name} className="model">
              <p className="kicker">{model.cite}</p>
              <h3>{model.name}</h3>
              <p>{model.body}</p>
            </article>
          ))}
        </div>
        <div className="clock-progress" aria-label="Lesson sequence progress">
          <div className="clock-progress-top">
            <strong>{activeStep.title}</strong>
            <span>
              Move {activeIndex + 1} of {clock.length} · {elapsedMinutes} of {totalMinutes} min
            </span>
          </div>
          <div
            className="clock-progress-track"
            role="progressbar"
            aria-label="Selected move's position in the lesson"
            aria-valuemin={0}
            aria-valuemax={totalMinutes}
            aria-valuenow={elapsedMinutes}
            aria-valuetext={`${elapsedMinutes} of ${totalMinutes} minutes through the lesson`}
          >
            <div
              className="clock-progress-fill"
              style={{ width: `${(elapsedMinutes / totalMinutes) * 100}%` }}
            />
          </div>
        </div>
        <div className="clock" aria-label="Select a lesson move">
          {clock.map((step, index) => {
            const open = openId === step.id;
            const startMinute = clock
              .slice(0, index)
              .reduce((total, item) => total + minutes(item.mins), 0);
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
                <span className="model-tag">{step.model} · {startMinute}–{startMinute + minutes(step.mins)} min</span>
                {open ? <p>{step.body}</p> : null}
              </button>
            );
          })}
        </div>
        <div className="organizer">
          <div>
            <p className="kicker">Graphic organizer · worked example</p>
            <h3 className="subhead">Hitting Budapest, beside us</h3>
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
