import { AfroChevron, AfroRectangle, AfroSemiCircle, AfroTriangle } from "@/components/hub/afro-shapes";

type Contributor = {
  name: string;
  role: string;
  initials: string;
  image: string;
  kind: string;
  tagline: string;
  isInstitution?: boolean;
  shape: string;
  color: string;
};

const people: Contributor[] = [
  {
    name: "Tarisai Tara Mabuto",
    role: "Lead Researcher · MAEd Candidate in Language and Literature",
    initials: "TM",
    image: "/images/Tara.jpg",
    kind: "Lead Researcher",
    tagline: "Curator & Curriculum Developer",
    shape: "/images/Shapes/African Shape (1).svg",
    color: "#E0533C",
  },
  {
    name: "Romel A. Pascua, Ph.D.",
    role: "Advisory Committee Chair",
    initials: "RP",
    image: "/images/Romel A. Pascua.jpg",
    kind: "Advisory Chair",
    tagline: "Academic Oversight & Methodology",
    shape: "/images/Shapes/African Shape (2).svg",
    color: "#16845B",
  },
  {
    name: "Winicel May C. Ancheta, Ph.D.",
    role: "Member, Advisory Committee",
    initials: "WA",
    image: "/images/Winicel May Ancheta.jpg",
    kind: "Committee Member",
    tagline: "Literary Pedagogy & Reading Lenses",
    shape: "/images/Shapes/African Shape (3).svg",
    color: "#F2C94C",
  },
  {
    name: "Jahnese D. Asuncion, Ph.D.",
    role: "Member, Advisory Committee",
    initials: "JA",
    image: "/images/Jahnese Asuncion.jpg",
    kind: "Committee Member",
    tagline: "Language Instruction & Curricular Design",
    shape: "/images/Shapes/African Shape (4).svg",
    color: "#16845B",
  },
  {
    name: "Jeanette G. Dials, Ed.D.",
    role: "Member, Advisory Committee",
    initials: "JD",
    image: "/images/Jeanette Dials.jpg",
    kind: "Committee Member",
    tagline: "Instructional Leadership & Ethics",
    shape: "/images/Shapes/African Shape (1).svg",
    color: "#C44B2E",
  },
  {
    name: "Mariano Marcos State University",
    role: "Graduate School · Laoag City, Ilocos Norte, Philippines",
    initials: "MMSU",
    image: "/images/mmsu-logo.png",
    kind: "Academic Home",
    tagline: "Center of Excellence in Teacher Education",
    isInstitution: true,
    shape: "/images/Shapes/Africa.svg",
    color: "#123F2B",
  },
];

export function Contributors() {
  return (
    <section className="block contributors-section" id="contributors" aria-labelledby="contributors-title">
      {/* Bold Expressive African Geometric Shapes Scattered in Section Margins */}
      <div className="contributors-shapes-scatter" aria-hidden="true">
        <div className="scatter-shape shape-top-left">
          <AfroSemiCircle color="#F2C94C" size={88} rotation={180} />
          <AfroTriangle color="#E0533C" size={54} rotation={25} />
        </div>
        <div className="scatter-shape shape-top-right">
          <AfroTriangle color="#16845B" size={64} rotation={-40} />
          <AfroRectangle color="#E0533C" width={68} height={38} rotation={15} />
        </div>
        <div className="scatter-shape shape-bottom-left">
          <AfroChevron color="#C44B2E" size={58} rotation={180} />
        </div>
        <div className="scatter-shape shape-bottom-right">
          <AfroSemiCircle color="#16845B" size={96} rotation={90} />
          <AfroTriangle color="#F2C94C" size={50} rotation={-15} />
        </div>
      </div>

      <div className="wrap">
        <div className="block-head">
          <div className="kicker-group">
            <span className="kicker-shape" aria-hidden="true">
              <AfroSemiCircle color="#F2C94C" size={26} rotation={180} />
            </span>
            <p className="kicker">The People Behind the Shelf</p>
          </div>
          <h2 id="contributors-title" className="section-title">
            Research Is Human Work.
          </h2>
          <p className="lede">
            Meet the researcher, advisory committee, and university leadership supporting this
            supplementary resource hub. A balanced team bridging academic rigor, classroom reality,
            and cultural integrity.
          </p>
        </div>

        {/* Immaculate 6-Card Grid: 3 Cards × 2 Rows on Desktop, Symmetrically Balanced */}
        <div className="contributors-six-grid" aria-label="Researchers and academic institution">
          {people.map((person, index) => (
            <article
              key={person.name}
              className={`contributor-card-v2 ${person.isInstitution ? "is-institution-card" : ""}`}
              style={{ "--card-accent": person.color } as React.CSSProperties}
            >
              {/* Geometric Corner Notch Accent */}
              <div className="card-afro-badge" aria-hidden="true">
                {index === 0 && <AfroTriangle color="#E0533C" size={20} rotation={15} />}
                {index === 1 && <AfroSemiCircle color="#16845B" size={24} rotation={180} />}
                {index === 2 && <AfroRectangle color="#F2C94C" width={24} height={15} />}
                {index === 3 && <AfroChevron color="#16845B" size={20} />}
                {index === 4 && <AfroTriangle color="#C44B2E" size={20} rotation={-45} />}
                {index === 5 && <AfroSemiCircle color="#F2C94C" size={24} rotation={90} />}
              </div>

              <div
                className={`contributor-visual-frame ${person.isInstitution ? "institution-visual" : ""}`}
                aria-label={person.name + (person.isInstitution ? " seal" : " portrait")}
              >
                <img
                  src={person.image}
                  alt={person.isInstitution ? "Official seal of " + person.name : "Portrait of " + person.name}
                  loading="lazy"
                  className={person.isInstitution ? "institution-seal-img" : "person-portrait-img"}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="contributor-photo-tag">
                  {person.isInstitution ? "University Seal" : "Portrait"}
                </span>
              </div>

              <div className="contributor-copy-v2">
                <div className="contributor-kind-row">
                  <span className="contributor-kind-badge" style={{ backgroundColor: person.color }}>
                    {person.kind}
                  </span>
                  <span className="contributor-card-index">0{index + 1}</span>
                </div>

                <h3>{person.name}</h3>
                <p className="contributor-role-text">{person.role}</p>
                <p className="contributor-tagline-text">{person.tagline}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="contributors-footer-banner">
          <div className="banner-left">
            <span className="banner-icon-badge" aria-hidden="true">
              <img src="/images/Shapes/Africa.svg" alt="" />
            </span>
            <div>
              <strong>Academic Partnership · Division of Laoag City</strong>
              <p>
                Developed under the supervision of the MMSU Graduate School in dialogue with
                secondary English educators across the Ilocos Norte region.
              </p>
            </div>
          </div>
          <span className="banner-stamp">DepEd English 8 · Revised K to 10 Aligned</span>
        </div>
      </div>
    </section>
  );
}
