export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <p className="kicker hero-kicker rise">MMSU Graduate School · Laoag City</p>
          <h1 id="hero-title" className="display rise rise-2">
            African literature, <em>opened</em> for class.
          </h1>
          <figure className="hero-fig rise rise-3">
            <img
              src="/images/hero-shelf.jpg"
              alt="A sunlit reading room: clothbound books, kente cloth, and a bowl of guavas."
              width={1600}
              height={1067}
            />
            <span className="hero-fig-stamp" aria-hidden="true">A field guide · 10 works</span>
            <figcaption>The room is only the doorway. The ten books are on the shelf below.</figcaption>
          </figure>
          <div className="hero-rest rise rise-4">
            <p className="lede">
              Supplementary packages for Grade 8 English under the Revised K to 10 Curriculum.
              Context, vocabulary, and a timed path for the African texts in the Afro-Asian
              literature quarter.
            </p>
            <p className="byline">
              Tarisai Tara Mabuto
              <span> · MAEd Language and Literature · Mariano Marcos State University</span>
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#corpus">
                Open the shelf <span aria-hidden="true">↗</span>
              </a>
              <a className="btn btn-ghost" href="#toolkits">
                See the lesson clock <span aria-hidden="true">◷</span>
              </a>
            </div>
          </div>
        </div>
        <div className="stats" aria-label="Hub at a glance">
          <p className="stat">
            <b>10</b>
            <span>selected works</span>
          </p>
          <p className="stat">
            <b>5</b>
            <span>genres, from poem to future</span>
          </p>
          <p className="stat">
            <b>50</b>
            <span>minutes, mapped move by move</span>
          </p>
          <p className="stat">
            <b>3</b>
            <span>Carter &amp; Long models</span>
          </p>
        </div>
      </div>
    </section>
  );
}
