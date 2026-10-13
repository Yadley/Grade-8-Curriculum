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
            This ten-piece inventory follows the thesis submitted for the MAEd in Language and Literature. It is a proposed supplementary resource for teachers to consider alongside the applicable curriculum guide, authorized texts, and local instructional requirements.
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
            A ten-piece corpus can support inquiry; it cannot represent an entire continent.
          </q>
          <p>Selection principle: teach each work in its own context, and treat the corpus as a bounded study inventory.</p>
        </div>
      </div>
    </section>
  );
}
