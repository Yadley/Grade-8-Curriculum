import { useMemo, useState } from "react";
import { genres, works, type GenreFilter, type Work } from "@/data/works";
import { BookFace } from "@/components/hub/book-face";
import { Dossier } from "@/components/hub/dossier";

function matches(work: Work, query: string) {
  if (!query) return true;
  const hay = [work.title, work.author, work.country, work.region, work.lens, work.genre, work.card]
    .join(" ")
    .toLowerCase();
  return hay.includes(query);
}

export function Corpus() {
  const [genre, setGenre] = useState<GenreFilter>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const needle = query.trim().toLowerCase();

  const visible = useMemo(
    () => works.filter((work) => (genre === "All" || work.genre === genre) && matches(work, needle)),
    [genre, needle],
  );
  const open = works.find((work) => work.id === openId) ?? null;

  return (
    <section className="block" id="corpus" aria-labelledby="corpus-title">
      <div className="shelf-band">
        <div className="wrap shelf-band-head">
          <p className="kicker">The shelf</p>
          <p>Drag sideways on a phone. On a larger screen the books drift — pause by hovering.</p>
        </div>
        <div className="rail-window" data-lenis-prevent-touch>
          <div className="marquee-track">
            <div className="marquee-set">
              {works.map((work, index) => (
                <button
                  key={work.id}
                  type="button"
                  className="rail-book"
                  onClick={() => setOpenId(work.id)}
                >
                  <BookFace work={work} decorative eager={index < 4} />
                  <span className="sr-only">Open {work.title}</span>
                </button>
              ))}
            </div>
            <div className="marquee-set marquee-clone" aria-hidden="true" inert>
              {works.map((work) => (
                <span key={work.id} className="rail-book">
                  <BookFace work={work} decorative />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="block-head">
          <p className="kicker">Literary corpus</p>
          <h2 id="corpus-title" className="section-title">
            Ten literary pieces. Explore the corpus.
          </h2>
          <p className="lede">
            Five poems, two short stories, one critical essay, and two speculative fiction works, as listed in the thesis inventory. Open a dossier for context, vocabulary, a classroom bridge, and discussion prompts.
          </p>
        </div>
        <div className="toolbar">
          <label className="lbl">
            Search by title, author, or country
            <input
              className="field"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Soyinka, guava, Kenya…"
              type="search"
            />
          </label>
          <div className="chips" role="group" aria-label="Filter by genre">
            {genres.map((item) => {
              const count =
                item === "All" ? works.length : works.filter((work) => work.genre === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  className="chip"
                  aria-pressed={genre === item}
                  onClick={() => setGenre(item)}
                >
                  {item} <span className="count">{count}</span>
                </button>
              );
            })}
          </div>
          <p className="result-line">
            Showing {visible.length} of {works.length}
          </p>
        </div>
        {visible.length === 0 ? (
          <p className="empty">No work matches that search. Try a country, an author, or clear the genre.</p>
        ) : (
          <div className="shelf" key={`${genre}-${needle}`}>
            {visible.map((work) => (
              <button key={work.id} type="button" className="book" onClick={() => setOpenId(work.id)}>
                <BookFace work={work} decorative />
                <span className="book-caption">
                  <span className="work-meta">
                    {work.country} · {work.region}
                  </span>
                  <span className="work-card">{work.card}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        <p className="fine shelf-note">
          The covers are original visual labels, not publisher covers or reproductions of the literary texts. Displayed years follow the thesis inventory; verify publication details against the authorized edition and bibliography before teaching, especially where the thesis draft gives conflicting dates.
        </p>
      </div>
      <Dossier work={open} onClose={() => setOpenId(null)} />
    </section>
  );
}
