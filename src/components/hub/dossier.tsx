import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import { BookFace } from "@/components/hub/book-face";
import { downloadText, workPack } from "@/lib/pack";
import type { Work } from "@/data/works";

export function Dossier({ work, onClose }: { work: Work | null; onClose: () => void }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (work) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [work, lenis]);

  return (
    <Dialog.Root open={work !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="sheet-pos">
          {work ? (
            <div className="sheet">
              <div className="sheet-bar">
                <p className="kicker">
                  {work.number} · {work.genre}
                </p>
                <Dialog.Close className="btn btn-ghost" type="button">
                  <X aria-hidden="true" size={18} />
                  Close
                </Dialog.Close>
              </div>
              <div className="sheet-body dossier" data-lenis-prevent>
                <div className="dossier-top">
                  <BookFace work={work} eager />
                  <div>
                    <Dialog.Title asChild>
                      <h2>{work.title}</h2>
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Teaching dossier for {work.title} by {work.author}.
                    </Dialog.Description>
                    <p className="meta-row">
                      <span>{work.author}</span>
                      <span>{work.country}</span>
                      <span>{work.region}</span>
                      <span>{work.era}</span>
                    </p>
                    <p className="dossier-life">{work.life}</p>
                  </div>
                </div>
                {work.note ? <p className="note">{work.note}</p> : null}
                {work.quote ? (
                  <figure className="pull">
                    <q>{work.quote.text}</q>
                    <cite>{work.quote.cite}</cite>
                  </figure>
                ) : null}
                <section>
                  <h3>Why this text</h3>
                  <p>{work.why}</p>
                </section>
                <section>
                  <h3>Situation</h3>
                  <p>{work.situation}</p>
                </section>
                <section>
                  <h3>Words to unlock</h3>
                  <ul className="words">
                    {work.words.map((word) => (
                      <li key={word.term}>
                        <b>{word.term}</b>
                        <span>{word.gloss}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>In the twelve-minute read</h3>
                  <p>{work.focus}</p>
                  <p className="fine">
                    First model: {work.model}. Lens: {work.lens}.
                  </p>
                </section>
                <section>
                  <h3>Bridge</h3>
                  <p>{work.bridge}</p>
                </section>
                <section>
                  <h3>Ask the class</h3>
                  <ol className="ask">
                    {work.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ol>
                </section>
                <div className="actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => downloadText(`${work.number}-${work.id}-dossier.txt`, workPack(work))}
                  >
                    Download this dossier
                  </button>
                </div>
                <p className="fine">
                  Teaching dossier only. The literary text is not reproduced here. Bring the copy
                  your school is allowed to read.
                </p>
              </div>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
