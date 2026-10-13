import { pillars } from "@/data/hub";

export function Criteria() {
  return (
    <section className="block" id="criteria" aria-labelledby="criteria-title">
      <div className="wrap">
        <div className="criteria-intro">
          <div className="criteria-intro-copy">
            <div className="block-head">
              <p className="kicker">Selection criteria</p>
              <h2 id="criteria-title" className="section-title">
                A defined corpus, with room for careful reading.
              </h2>
            </div>
            <p className="criteria-greeting">Hi! My name is <strong>Tarisai Tara Mabuto.</strong></p>
            <p>I developed this curated ten-piece African literary inventory as part of my master’s thesis for the degree of Master of Arts in Education (MAEd) in Language and Literature at Mariano Marcos State University.</p>
            <p>Designed as an open-access supplementary resource, this hub provides secondary educators with award-winning contemporary poetry, prose, and speculative texts to enrich classroom instruction. These materials are intended to serve as practical pedagogical companions—to be explored alongside the DepEd Revised K to 10 English Curriculum Guide, authorized school modules, and your local division instructional priorities.</p>
          </div>
          <figure className="criteria-portrait">
            <img src="/images/Tara.jpg" alt="Tarisai Tara Mabuto, researcher and creator of the African Literature Hub" loading="lazy" />
            <figcaption>Tarisai Tara Mabuto · MAEd Language and Literature</figcaption>
          </figure>
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
