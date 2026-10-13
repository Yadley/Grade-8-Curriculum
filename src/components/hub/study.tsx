import { useEffect, useState, type FormEvent } from "react";
import { committee, roles } from "@/data/hub";
import { works } from "@/data/works";

type Note = {
  id: string;
  name: string;
  school: string;
  role: string;
  work: string;
  rating: number;
  comment: string;
  at: string;
};

const STORAGE_KEY = "alh-feedback-v1";

export function Study() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [work, setWork] = useState("The whole shelf");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) setNotes(parsed as Note[]);
    } catch {
      setNotes([]);
    }
  }, []);

  function persist(next: Note[]) {
    setNotes(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (rating < 1) {
      setError("Choose a usefulness rating from 1 to 5.");
      return;
    }
    if (comment.trim().length < 8) {
      setError("Write a short comment so a later reader knows what you tried.");
      return;
    }
    const note: Note = {
      id: crypto.randomUUID(),
      name: name.trim(),
      school: school.trim(),
      role,
      work,
      rating,
      comment: comment.trim(),
      at: new Date().toLocaleString(),
    };
    persist([note, ...notes]);
    setComment("");
    setRating(0);
    setError("");
    setSaved("Saved on this device. Nothing was sent to a server.");
  }

  return (
    <section className="block" id="study" aria-labelledby="study-title">
      <div className="wrap">
        <div className="block-head">
          <p className="kicker">About the study</p>
          <h2 id="study-title" className="section-title">
            Inputs for supplementary materials.
          </h2>
          <p className="lede">
            Grade 8 English Teachers’ Literary Selections, Strategies and Challenges in Teaching
            African Literature: Inputs for Supplementary Based Materials.
          </p>
        </div>
        <p>
          This page is the developmental output named by that title. It is a teaching shelf for
          the Schools Division of Laoag City, offered openly so a teacher can use it on a phone
          between bells. It is not the thesis manuscript, and it does not replace the Revised K
          to 10 curriculum guide.
        </p>
        <div className="people">
          <article className="person">
            <b>Tarisai Tara Mabuto</b>
            <span>Researcher · MAEd candidate, Language and Literature</span>
          </article>
          {committee.map((person) => (
            <article key={person.name} className="person">
              <b>{person.name}</b>
              <span>{person.role}</span>
            </article>
          ))}
          <article className="person">
            <b>Mariano Marcos State University Graduate School</b>
            <span>Laoag City</span>
          </article>
        </div>

        <form className="form-grid stack-lg" onSubmit={submit}>
          <div>
            <p className="kicker">Classroom note</p>
            <h3 className="subhead">Tell the shelf what happened in the room.</h3>
            <p className="help">
              Optional, and stored only on this phone or computer, in keeping with the spirit of
              Republic Act No. 10173. No account. No upload.
            </p>
          </div>
          <div className="form-row">
            <label className="lbl">
              Name, if you want it kept
              <input className="field" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label className="lbl">
              School
              <input className="field" value={school} onChange={(event) => setSchool(event.target.value)} />
            </label>
          </div>
          <div className="form-row">
            <label className="lbl">
              Role
              <select className="field" value={role} onChange={(event) => setRole(event.target.value)}>
                {roles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="lbl">
              Which work
              <select className="field" value={work} onChange={(event) => setWork(event.target.value)}>
                <option>The whole shelf</option>
                {works.map((item) => (
                  <option key={item.id}>
                    {item.number} {item.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <fieldset className="lbl">
            <legend>Usefulness in a real period</legend>
            <div className="ratings">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={rating === value}
                  onClick={() => setRating(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <p className="help">1 is hard to use in class. 5 is ready to teach on Monday.</p>
          </fieldset>
          <label className="lbl">
            Comment
            <textarea
              className="field"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="What held, and what a 50-minute class still needs."
            />
          </label>
          {error ? <p className="error">{error}</p> : null}
          {saved ? (
            <p className="status" role="status">
              {saved}
            </p>
          ) : null}
          <button className="btn btn-primary" type="submit">
            Save on this device
          </button>
        </form>

        <div className="notes">
          {notes.length === 0 ? (
            <p className="help">Nothing saved on this device yet.</p>
          ) : (
            notes.map((note) => (
              <article key={note.id} className="note-card">
                <p>
                  <b>
                    {note.rating}/5 · {note.work}
                  </b>
                </p>
                <p>{note.comment}</p>
                <p className="who">
                  {[note.name || "Unsigned", note.role, note.school, note.at].filter(Boolean).join(" · ")}
                </p>
                <button
                  type="button"
                  className="text-btn"
                  onClick={() => persist(notes.filter((item) => item.id !== note.id))}
                >
                  Remove this note
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
