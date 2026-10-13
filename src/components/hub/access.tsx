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
      color: { dark: "#1e4d2b", light: "#fbf6ee" },
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
  }

  return (
    <section className="block band" id="access" aria-labelledby="access-title">
      <div className="wrap access-grid">
        <div>
          <p className="kicker">Digital access</p>
          <h2 id="access-title" className="section-title">
            Take the shelf into the room.
          </h2>
          <p className="lede">
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
              Download the teacher pack
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
              {copied ? "Link copied" : "Copy page link"}
            </button>
          </div>
        </div>
        <div className="qr-card">
          <div
            className="qr-svg"
            role="img"
            aria-label="QR code that opens this hub"
            dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
          />
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
}
