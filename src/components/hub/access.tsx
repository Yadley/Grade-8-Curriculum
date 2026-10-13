import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { downloadText, printPack, teacherPack } from "@/lib/pack";

export function Access() {
  const [markup, setMarkup] = useState("");
  const [message, setMessage] = useState("The code opens this page on a phone.");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = `${window.location.origin}${window.location.pathname}`;
    QRCode.toString(url, {
      type: "svg",
      margin: 1,
      width: 196,
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
    <section className="block band" id="access" aria-labelledby="access-title">
      <div className="wrap access-grid">
        <div>
          <div className="kicker-group">
            <span className="kicker-shape" aria-hidden="true">
              <img src="/images/Shapes/African Shape (4).svg" alt="" style={{ filter: "invert(1)" }} />
            </span>
            <p className="kicker" style={{ color: "var(--color-sun)" }}>Digital access</p>
          </div>
          <h2 id="access-title" className="section-title" style={{ color: "var(--color-canvas)" }}>
            Take the shelf into the room.
          </h2>
          <p className="lede" style={{ color: "rgb(245 240 230 / 84%)" }}>
            Download the teacher pack, or let a phone scan the card. The pack holds every
            dossier, the selection criteria, and the 50-minute clock. The poems and stories
            stay with their authors. You bring the licensed copy.
          </p>
          <div className="actions stack-top">
            <button
              type="button"
              className="btn btn-paper"
              onClick={() => downloadText("african-literature-grade8-teacher-pack.txt", teacherPack())}
            >
              Download teacher pack
            </button>
            <button
              type="button"
              className="btn btn-paper"
              onClick={() => {
                const ok = printPack();
                if (!ok) setMessage("Pop-ups are blocked. Download the pack instead.");
              }}
            >
              Print the pack
            </button>
            <button type="button" className="btn btn-paper" onClick={copyLink}>
              {copied ? "Link copied ✓" : "Copy page link"}
            </button>
          </div>
        </div>

        {/* QR Card with African Geometric Frame */}
        <div className="qr-card qr-card-framed">
          <div className="qr-corner qr-corner-tl" aria-hidden="true">
            <img src="/images/Shapes/African Shape (2).svg" alt="" />
          </div>
          <div className="qr-corner qr-corner-br" aria-hidden="true">
            <img src="/images/Shapes/African Shape (1).svg" alt="" />
          </div>

          <div
            className="qr-svg"
            role="img"
            aria-label="QR code that opens this hub"
            dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
          />
          <p>{message}</p>
          <span className="qr-badge">Grade 8 African Literature Hub · MMSU</span>
        </div>
      </div>
    </section>
  );
}
