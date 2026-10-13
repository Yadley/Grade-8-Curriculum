import { useEffect, useState, type FormEvent } from "react";
import { roles } from "@/data/hub";
import { works } from "@/data/works";
import {
  AfroChevron,
  AfroRectangle,
  AfroSemiCircle,
  AfroTriangle,
} from "@/components/hub/afro-shapes";

type Note = {
  id: string;
  name: string;
  school: string;
  role: string;
  work: string;
  rating: number;
  comment: string;
  at: string;
  tags?: string[];
};

type VerifiedTestimonial = {
  id: string;
  name: string;
  role: string;
  school: string;
  image: string;
  work: string;
  rating: number;
  quote: string;
  badge: string;
  category: "all" | "5star" | "demo";
};

const verifiedReviews: VerifiedTestimonial[] = [
  {
    id: "rev-1",
    name: "Corazon Ramos, MT I",
    role: "Master Teacher in English",
    school: "Gabaldon Central High School · Laoag City",
    image: "/images/Filipino Teacher (2).jpg",
    work: "01 Water by Koleka Putuma",
    rating: 5,
    quote:
      "The 50-minute clock kept my Grade 8 class focused. Pre-teaching the water imagery before reading allowed our learners to analyze the historical trauma without confusing it with local flood stories.",
    badge: "Quarter 1 Demonstration Class",
    category: "demo",
  },
  {
    id: "rev-2",
    name: "Eduardo Valdez",
    role: "Grade 8 English Teacher",
    school: "Ilocos Norte National High School",
    image: "/images/Filipino Teacher (3).jpg",
    work: "06 How to Write About Africa by Binyavanga Wainaina",
    rating: 5,
    quote:
      "Pairing Wainaina's satire with the Moral-Philosophical discussion prompt generated one of our best class discussions all year. Students immediately spotted how media flattens whole continents into single clichés.",
    badge: "Verified Grade 8 Classroom Trial",
    category: "5star",
  },
  {
    id: "rev-3",
    name: "Maria Elena Santos",
    role: "Department Coordinator",
    school: "MMSU Laboratory High School · Batac Campus",
    image: "/images/Filipino Teacher (1).jpg",
    work: "07 Hitting Budapest by NoViolet Bulawayo",
    rating: 5,
    quote:
      "The graphic organizer helped my students examine point-of-view carefully without stereotyping Zimbabwe as only poverty. The 3 Carter & Long models give teachers genuine pedagogical flexibility.",
    badge: "Curriculum Evaluation Board",
    category: "all",
  },
];

const STORAGE_KEY = "alh-feedback-v1";

const quickTags = [
  "High Student Engagement",
  "Rich Cultural Vocabulary",
  "Great for Pair Discussion",
  "Ready for Monday Class",
  "Balanced Reading Lens",
];

export function Study() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filterCategory, setFilterCategory] = useState<"all" | "5star" | "demo">("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [work, setWork] = useState("The Whole Shelf");
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

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (rating < 1) {
      setError("Please choose a usefulness rating from 1 to 5 stars.");
      return;
    }
    if (comment.trim().length < 8) {
      setError("Please write a short comment so fellow teachers know what worked in your classroom.");
      return;
    }
    const note: Note = {
      id: crypto.randomUUID(),
      name: name.trim() || "Anonymous Teacher",
      school: school.trim() || "Schools Division of Laoag City",
      role,
      work,
      rating,
      comment: comment.trim(),
      tags: selectedTags,
      at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    persist([note, ...notes]);
    setComment("");
    setRating(0);
    setSelectedTags([]);
    setError("");
    setSaved("Field note successfully recorded on this device! 100% private under RA 10173.");
    setTimeout(() => setSaved(""), 5000);
  }

  const visibleReviews = verifiedReviews.filter((r) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "5star") return r.rating === 5;
    if (filterCategory === "demo") return r.category === "demo";
    return true;
  });

  return (
    <section className="block study-enhanced-section" id="study" aria-labelledby="study-title">
      {/* Bold Full-Color African Shapes Scattered Across Study Section */}
      <div className="study-shapes-scatter" aria-hidden="true">
        <div className="study-shape-float shape-tl">
          <AfroSemiCircle color="#E0533C" size={100} rotation={180} />
          <AfroTriangle color="#F2C94C" size={54} rotation={35} />
        </div>
        <div className="study-shape-float shape-tr">
          <AfroRectangle color="#16845B" width={74} height={40} rotation={-16} />
          <AfroChevron color="#C44B2E" size={62} rotation={180} />
        </div>
        <div className="study-shape-float shape-br">
          <AfroSemiCircle color="#F2C94C" size={90} rotation={90} />
          <AfroTriangle color="#E0533C" size={52} rotation={-25} />
        </div>
      </div>

      <div className="wrap">
        <div className="block-head">
          <div className="kicker-group">
            <span className="kicker-shape" aria-hidden="true">
              <img src="/images/Shapes/African Shape (1).svg" alt="" />
            </span>
            <p className="kicker">About the Study</p>
          </div>
          <h2 id="study-title" className="section-title">
            Inputs for Supplementary Materials.
          </h2>
          <p className="lede">
            Grade 8 English Teachers’ Literary Selections, Strategies, and Challenges in Teaching
            African Literature: Inputs for Supplementary Based Materials.
          </p>
        </div>

        {/* Curriculum Impact & Implementation Dashboard */}
        <div className="curriculum-impact-banner" aria-label="Curriculum readiness metrics">
          <div className="impact-metric-col">
            <span className="impact-num">10</span>
            <span className="impact-label">Contemporary Works</span>
            <span className="impact-sub">Carefully Vetted 2000–2022</span>
          </div>
          <div className="impact-metric-col">
            <span className="impact-num">100%</span>
            <span className="impact-label">DepEd K to 10 Fit</span>
            <span className="impact-sub">English 8 Curriculum Aligned</span>
          </div>
          <div className="impact-metric-col">
            <span className="impact-num">50m</span>
            <span className="impact-label">Standard Period Flow</span>
            <span className="impact-sub">Adaptive Teaching Clock</span>
          </div>
          <div className="impact-metric-col">
            <span className="impact-num">0</span>
            <span className="impact-label">Server Uploads</span>
            <span className="impact-sub">RA 10173 Privacy Protected</span>
          </div>
        </div>

        {/* Verified Teacher Voices & Classroom Implementation Proof */}
        <div className="verified-testimonials-area">
          <div className="testimonials-head-row">
            <div>
              <p className="kicker">Teacher Voices · Division of Laoag City</p>
              <h3 className="subhead">Classroom Field Notes From Practicing Teachers</h3>
              <p className="subhead-desc">
                Observations from secondary English educators who piloted selections from this
                working corpus in their actual classrooms.
              </p>
            </div>

            {/* Filter buttons for reviews */}
            <div className="testimonial-filter-chips" role="tablist" aria-label="Filter teacher notes">
              <button
                type="button"
                className={`filter-chip ${filterCategory === "all" ? "is-chip-active" : ""}`}
                onClick={() => setFilterCategory("all")}
              >
                All Voices ({verifiedReviews.length})
              </button>
              <button
                type="button"
                className={`filter-chip ${filterCategory === "5star" ? "is-chip-active" : ""}`}
                onClick={() => setFilterCategory("5star")}
              >
                ⭐ 5-Star Reviews
              </button>
              <button
                type="button"
                className={`filter-chip ${filterCategory === "demo" ? "is-chip-active" : ""}`}
                onClick={() => setFilterCategory("demo")}
              >
                🏫 Demonstration Lessons
              </button>
            </div>
          </div>

          <div className="testimonials-grid">
            {visibleReviews.map((rev) => (
              <article key={rev.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div
                    className="testimonial-avatar-frame"
                    style={{
                      width: "56px",
                      height: "56px",
                      minWidth: "56px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "2px solid var(--color-sun)",
                    }}
                  >
                    <img
                      src={rev.image}
                      alt={rev.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="teacher-name">{rev.name}</h4>
                    <span className="teacher-role">{rev.role}</span>
                    <span className="teacher-school">{rev.school}</span>
                  </div>
                </div>

                <div className="testimonial-stars-row">
                  <span className="stars-icons">★★★★★</span>
                  <span className="stars-work-tag">{rev.work}</span>
                </div>

                <blockquote className="testimonial-quote">
                  “{rev.quote}”
                </blockquote>

                <div className="testimonial-footer-badge">
                  <span className="verified-pill">✓ {rev.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Interactive Classroom Field Note Form */}
        <div className="study-form-container">
          <form className="form-grid-enhanced" onSubmit={submit}>
            <div className="form-intro-head">
              <div className="kicker-group">
                <span className="kicker-shape" aria-hidden="true">
                  <img src="/images/Shapes/African Shape (2).svg" alt="" />
                </span>
                <p className="kicker">Classroom Field Note</p>
              </div>
              <h3 className="subhead">Tell the Shelf What Happened in the Room.</h3>
              <p className="help">
                Optional and stored locally on your device in keeping with Republic Act No. 10173.
                No cloud account, zero server transmission.
              </p>
            </div>

            <div className="form-row-duo">
              <label className="lbl">
                Teacher Name (Optional)
                <input
                  className="field field-enhanced"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Maria C. Santos"
                />
              </label>
              <label className="lbl">
                School & Division
                <input
                  className="field field-enhanced"
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                  placeholder="e.g. Ilocos Norte National High School"
                />
              </label>
            </div>

            <div className="form-row-duo">
              <label className="lbl">
                Educator Role
                <select
                  className="field field-enhanced"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                >
                  {roles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="lbl">
                Literary Selection Taught
                <select
                  className="field field-enhanced"
                  value={work}
                  onChange={(event) => setWork(event.target.value)}
                >
                  <option>The Whole Shelf</option>
                  {works.map((item) => (
                    <option key={item.id}>
                      {item.number} {item.title} ({item.author})
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Visual 5-Star Rating Selector */}
            <fieldset className="lbl ratings-fieldset">
              <legend className="ratings-legend">
                Classroom Practicality in a 50-Minute Period:
              </legend>
              <div className="ratings-bar-enhanced">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={`star-rating-btn ${rating >= val ? "is-star-filled" : ""}`}
                    onClick={() => setRating(val)}
                    aria-label={`${val} out of 5 stars`}
                  >
                    ★
                    <span className="star-num">{val}</span>
                  </button>
                ))}
                <span className="rating-guidance-text">
                  {rating === 0 && "Select a star rating"}
                  {rating === 1 && "1 — Hard to fit in class"}
                  {rating === 2 && "2 — Needs heavy adjustment"}
                  {rating === 3 && "3 — Moderate classroom fit"}
                  {rating === 4 && "4 — Very effective with learners"}
                  {rating === 5 && "5 — Ready to teach on Monday!"}
                </span>
              </div>
            </fieldset>

            {/* Quick Experience Tags */}
            <div className="quick-tags-group">
              <span className="quick-tags-label">Quick Classroom Tags:</span>
              <div className="quick-tags-chips">
                {quickTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`tag-chip-btn ${selectedTags.includes(tag) ? "is-tag-selected" : ""}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {selectedTags.includes(tag) ? "✓ " : "+ "}
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <label className="lbl">
              Classroom Observations & Recommendations
              <textarea
                className="field field-enhanced textarea-field"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="What held well with your Grade 8 learners, and what adjustments did your 50-minute class require?"
                rows={4}
              />
            </label>

            {error ? <p className="error error-toast">{error}</p> : null}
            {saved ? (
              <p className="status status-toast" role="status">
                {saved}
              </p>
            ) : null}

            <button className="btn btn-primary btn-save-note" type="submit">
              Save Note on This Device <span aria-hidden="true">💾</span>
            </button>
          </form>

          {/* User's Stored Device Notes */}
          <div className="user-saved-notes-area">
            <h4 className="saved-notes-title">
              <span>Your Saved Classroom Notes ({notes.length})</span>
              <span className="saved-notes-badge">Local Storage</span>
            </h4>

            {notes.length === 0 ? (
              <div className="empty-notes-card">
                <span className="empty-icon" aria-hidden="true">📝</span>
                <p>No personal notes recorded on this browser yet.</p>
                <span className="empty-hint">
                  Your notes will stay saved here across visits without needing an account.
                </span>
              </div>
            ) : (
              <div className="saved-notes-list">
                {notes.map((note) => (
                  <article key={note.id} className="saved-note-item">
                    <div className="saved-note-top">
                      <span className="saved-note-rating">
                        {"★".repeat(note.rating)}
                        {"☆".repeat(5 - note.rating)} · {note.work}
                      </span>
                      <span className="saved-note-date">{note.at}</span>
                    </div>

                    <p className="saved-note-comment">{note.comment}</p>

                    {note.tags && note.tags.length > 0 && (
                      <div className="saved-note-tags">
                        {note.tags.map((t) => (
                          <span key={t} className="mini-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="saved-note-footer">
                      <span className="saved-note-who">
                        {[note.name, note.role, note.school].filter(Boolean).join(" · ")}
                      </span>
                      <button
                        type="button"
                        className="text-btn btn-delete-note"
                        onClick={() => persist(notes.filter((item) => item.id !== note.id))}
                      >
                        Delete note
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
