import { clock, models, pillars } from "@/data/hub";
import { works, type Work } from "@/data/works";

const RIGHTS =
  "Teaching layer only. The literary text is not reproduced. Use the copy your school is allowed to read. Do not photocopy an entire copyrighted work for distribution.";

export function workPack(work: Work) {
  const words = work.words.map((word) => `- ${word.term}: ${word.gloss}`).join("\n");
  const questions = work.questions.map((question, index) => `${index + 1}. ${question}`).join("\n");
  return [
    `${work.number}  ${work.title}`,
    `${work.author} · ${work.country} · ${work.region}`,
    work.life,
    `${work.genre} · ${work.era}`,
    `Lens: ${work.lens}`,
    `Suggested teaching approach: ${work.model} (approach named in the thesis survey)`,
    "",
    "WHY THIS TEXT",
    work.why,
    "",
    "SITUATION FOR THE TEACHER",
    work.situation,
    "",
    work.note ? `BEFORE YOU ASSIGN IT\n${work.note}\n` : "",
    work.quote ? `BRIEF QUOTATION\n“${work.quote.text}”\n${work.quote.cite}\n` : "",
    "WORDS TO UNLOCK",
    words,
    "",
    "READING FOCUS",
    work.focus,
    "",
    "BRIDGE",
    work.bridge,
    "",
    "ASK THE CLASS",
    questions,
    "",
    RIGHTS,
  ]
    .filter(Boolean)
    .join("\n");
}

export function teacherPack() {
  const head = [
    "AFRICAN LITERATURE HUB",
    "Grade 8 English · Supplementary teacher pack",
    "Revised K to 10 Curriculum",
    "Tarisai Tara Mabuto",
    "MAEd Language and Literature, Mariano Marcos State University Graduate School, Laoag City",
    "Advisory chair: Romel A. Pascua, Ph.D.",
    "",
    "These notes support the African texts inside the Grade 8 Afro-Asian literature quarter. They are inputs for teaching, not a replacement for the curriculum guide.",
    "",
    "SELECTION CRITERIA",
    ...pillars.map((pillar) => `${pillar.number} ${pillar.title}\n${pillar.body}`),
    "",
    "SIX TEACHING APPROACHES NAMED IN THE THESIS SURVEY",
    ...models.map((model) => `${model.name}. ${model.body}`),
    "",
    "A 50-MINUTE CLOCK",
    "5 + 8 + 12 + 10 + 8 + 7 = 50 minutes. This is a flexible planning example, not a required sequence; adjust it to the class period, selected work, and learners.",
    ...clock.map((step) => `${step.mins} · ${step.title} · ${step.model}\n${step.body}`),
    "",
    "WORKED BRIDGE: HITTING BUDAPEST",
    "In the text: children cross into a suburb and take guavas.",
    "Near us: young people move between places that do not share the same ease.",
    "Keep Bulawayo’s city specific. Guava can be the point of contact; the history is not interchangeable.",
    "",
    RIGHTS,
    "",
    "TEN DOSSIERS",
    "",
  ];
  return `${head.join("\n\n")}\n\n${works.map((work) => workPack(work)).join("\n\n----------\n\n")}\n`;
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function printPack() {
  const popup = window.open("", "_blank", "noopener,noreferrer");
  if (!popup) return false;
  const safe = teacherPack()
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">");
  popup.document.write(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>African Literature Hub: Teacher Pack</title>
    <style>
      body { font: 16px/1.5 Georgia, serif; color: #1c1917; margin: 2rem; }
      h1 { font-size: 1.6rem; }
      pre { white-space: pre-wrap; font: inherit; }
    </style></head><body><pre>${safe}</pre></body></html>`);
  popup.document.close();
  popup.focus();
  popup.print();
  return true;
}
