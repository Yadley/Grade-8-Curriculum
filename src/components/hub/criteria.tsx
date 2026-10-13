import { pillars } from "@/data/hub";

export function Criteria() {
  return (
    <section className="block" id="criteria" aria-labelledby="criteria-title">
      <div className="wrap">
        <div className="block-head">
          <p className="kicker">Selection criteria</p>
          <h2 id="criteria-title" className="section-title">
            A defined corpus, with room for careful reading.
          </h2>
          <p className="lede">
            Grade 8 English asks learners to evaluate Afro-Asian poetry and prose for meaning,
            purpose, and audience, and to write from an expanding cultural identity. This shelf
            is an input for that work. It is not the whole curriculum, and it does not stand in
            for Asia.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="pillar">
              <span className="pillar-no">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
        <div className="quote-band">
          <q>
            Ten texts cannot represent a continent. They can stop a syllabus from pretending one
            text is enough.
          </q>
          <p>Selection principle: teach each work in its own context, and treat the corpus as a bounded study inventory.</p>
        </div>
      </div>
    </section>
  );
}
