export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      {/* Decorative Woven African Geometric Border Stripe */}
      <div className="footer-woven-stripe" aria-hidden="true" />

      <div className="wrap footer-content">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-mark-group">
              <span className="footer-shape-mark" aria-hidden="true">
                <img src="/images/Shapes/Africa.svg" alt="" />
              </span>
              <div>
                <strong>African Literature Hub</strong>
                <span className="footer-tagline">A Living Digital Canvas for Secondary Classrooms</span>
              </div>
            </div>
            <p className="footer-desc">
              Curated ten-piece African literary inventory and instructional guide developed for
              the Schools Division of Laoag City, aligned with the DepEd Revised K to 10 English
              Curriculum.
            </p>
          </div>

          <div className="footer-meta-col">
            <div className="footer-shapes-row" aria-hidden="true">
              <img src="/images/Shapes/African Shape (1).svg" alt="" title="Triangle of Inquiry" />
              <img src="/images/Shapes/African Shape (2).svg" alt="" title="Arch of Craft" />
              <img src="/images/Shapes/African Shape (3).svg" alt="" title="Horizon of Connection" />
              <img src="/images/Shapes/African Shape (4).svg" alt="" title="Anchor of Readiness" />
            </div>

            <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
              Back to Top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-grid">
          <div>
            <span className="footer-label">Researcher & Curator</span>
            <p>Tarisai Tara Mabuto · MAEd in Language and Literature</p>
          </div>
          <div>
            <span className="footer-label">Academic Home</span>
            <p>Mariano Marcos State University · Graduate School, Laoag City</p>
          </div>
          <div>
            <span className="footer-label">Advisory Committee</span>
            <p>Romel A. Pascua, Ph.D. (Chair) · Winicel May C. Ancheta, Ph.D. · Jahnese D. Asuncion, Ph.D. · Jeanette G. Dials, Ed.D.</p>
          </div>
          <div>
            <span className="footer-label">Compliance & Rights</span>
            <p>Republic Act No. 10173 · Open Educational Resource · Local Device Storage Only</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
