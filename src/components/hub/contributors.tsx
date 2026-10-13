const people = [
  {
    name: "Tarisai Tara Mabuto",
    role: "Researcher · MAEd candidate, Language and Literature",
    initials: "TM",
    image: "/images/Tara.jpg",
    kind: "Researcher",
  },
  {
    name: "Romel A. Pascua, Ph.D.",
    role: "Advisory committee chair",
    initials: "RP",
    image: "/images/Romel A. Pascua.jpg",
    kind: "Advisory chair",
  },
  {
    name: "Winicel May Ancheta, Ph.D.",
    role: "Committee member",
    initials: "WA",
    image: "/images/Winicel May Ancheta.jpg",
    kind: "Committee",
  },
  {
    name: "Jahnese Asuncion, Ph.D.",
    role: "Committee member",
    initials: "JA",
    image: "/images/Jahnese Asuncion.jpg",
    kind: "Committee",
  },
  {
    name: "Jeanette Dials",
    role: "Committee member",
    initials: "JD",
    image: "/images/Jeanette Dials.jpg",
    kind: "Committee",
  },
];

export function Contributors() {
  return (
    <section className="block contributors-section" id="contributors" aria-labelledby="contributors-title">
      <div className="wrap">
        <div className="block-head">
          <p className="kicker">The people behind the shelf</p>
          <h2 id="contributors-title" className="section-title">Research is human work.</h2>
          <p className="lede">Meet the researcher and academic committee supporting this supplementary resource hub. Their names and roles are shown here; portraits can be added with their permission.</p>
        </div>
        <div className="contributors-grid">
          {people.map((person, index) => (
            <article className={index === 0 ? "contributor-card contributor-featured" : "contributor-card"} key={person.name}>
              <div className="contributor-photo" aria-label={person.name + " portrait"}>
                <span className="contributor-initials" aria-hidden="true">{person.initials}</span>
                <img
                  src={person.image}
                  alt={"Portrait of " + person.name}
                  loading="lazy"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <span className="contributor-photo-note">Portrait</span>
              </div>
              <div className="contributor-copy">
                <span className="contributor-kind">{person.kind}</span>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="institution-card">
          <span className="institution-mark" aria-hidden="true">M</span>
          <div>
            <p className="kicker">Academic home</p>
            <h3>Mariano Marcos State University</h3>
            <p>Graduate School · Laoag City, Ilocos Norte, Philippines</p>
          </div>
        </div>
        <p className="contributors-note">Portraits supplied for this project are now included. Initials remain as a fallback if an image cannot load.</p>
      </div>
    </section>
  );
}
