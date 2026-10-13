import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { downloadText, printPack, teacherPack } from "@/lib/pack";
import {
  AfroChevron,
  AfroRectangle,
  AfroSemiCircle,
  AfroTriangle,
} from "@/components/hub/afro-shapes";

export function Access() {
  const [markup, setMarkup] = useState("");
  const [message, setMessage] = useState("Scan to open this supplementary shelf on any mobile phone.");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = `${window.location.origin}${window.location.pathname}`;
    QRCode.toString(url, {
      type: "svg",
      margin: 1,
      width: 210,
      color: { dark: "#123F2B", light: "#F5F0E6" },
    })
      .then((svg) => setMarkup(svg))
      .catch(() => setMessage("The code could not be drawn. Copy the link instead."));
  }, []);

  async function copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const area = document.createElement("textarea");
      area.value = url;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className="block band access-enhanced-band" id="access" aria-labelledby="access-title">
      {/* Bold Full-Color African Shapes Framing the Access Band */}
      <div className="access-shapes-scatter" aria-hidden="true">
        <div className="access-shape-float shape-tl">
          <AfroSemiCircle color="#F2C94C" size={92} rotation={180} />
          <AfroTriangle color="#E0533C" size={56} rotation={-30} />
        </div>
        <div className="access-shape-float shape-tr">
          <AfroRectangle color="#F2C94C" width={72} height={38} rotation={22} />
          <AfroChevron color="#16845B" size={60} rotation={0} />
        </div>
        <div className="access-shape-float shape-br">
          <AfroSemiCircle color="#E0533C" size={88} rotation={90} />
          <AfroTriangle color="#F2C94C" size={48} rotation={15} />
        </div>
      </div>

      <div className="wrap access-grid">
        <div className="access-copy-col">
          <div className="kicker-group">
            <span className="kicker-shape" aria-hidden="true">
              <img src="/images/Shapes/African Shape (4).svg" alt="" style={{ filter: "invert(1)" }} />
            </span>
            <p className="kicker" style={{ color: "var(--color-sun)" }}>
              Digital Access & Offline Pack
            </p>
          </div>
          <h2 id="access-title" className="section-title" style={{ color: "var(--color-canvas)" }}>
            Take the Shelf Into the Room.
          </h2>
          <p className="lede" style={{ color: "rgb(245 240 230 / 88%)" }}>
            Download the comprehensive teacher package or scan the QR card on a phone. The pack
            includes all ten dossiers, pedagogical criteria, and the complete 50-minute lesson
            clock. The literature stays with its authors; you bring the authorized copy.
          </p>

          <div className="access-feature-cards">
            <div className="access-feature-item">
              <span className="feature-icon">📦</span>
              <div>
                <strong>Complete Offline Pack</strong>
                <p>10 Dossiers, Vocabulary Guides, and Intercultural Bridges</p>
              </div>
            </div>
            <div className="access-feature-item">
              <span className="feature-icon">⚡</span>
              <div>
                <strong>Zero Account Required</strong>
                <p>100% Free & Open-Access for Philippine Public Schools</p>
              </div>
            </div>
          </div>

          <div className="actions stack-top">
            <button
              type="button"
              className="btn btn-paper"
              onClick={() => downloadText("african-literature-grade8-teacher-pack.txt", teacherPack())}
            >
              Download Teacher Pack
            </button>
            <button
              type="button"
              className="btn btn-paper"
              onClick={() => {
                const ok = printPack();
                if (!ok) setMessage("Pop-ups are blocked. Download the pack instead.");
              }}
            >
              Print Classroom Pack
            </button>
            <button type="button" className="btn btn-paper" onClick={copyLink}>
              {copied ? "Link Copied ✓" : "Copy Page Link"}
            </button>
          </div>
        </div>

        {/* QR Card with Rich African Geometric Frame */}
        <div className="qr-card qr-card-framed">
          <div className="qr-corner qr-corner-tl" aria-hidden="true">
            <img src="/images/Shapes/African Shape (2).svg" alt="" />
          </div>
          <div className="qr-corner qr-corner-tr" aria-hidden="true">
            <img src="/images/Shapes/African Shape (4).svg" alt="" />
          </div>
          <div className="qr-corner qr-corner-br" aria-hidden="true">
            <img src="/images/Shapes/African Shape (1).svg" alt="" />
          </div>

          <div
            className="qr-svg"
            role="img"
            aria-label="QR code that opens this hub on mobile devices"
            dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
          />
          <p className="qr-caption">{message}</p>
          <span className="qr-badge">Grade 8 African Literature Hub · MMSU</span>
        </div>
      </div>
    </section>
  );
}
