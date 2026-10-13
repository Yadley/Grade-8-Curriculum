import { covers } from "@/data/covers";
import type { Work } from "@/data/works";

export function BookFace({
  work,
  decorative = false,
  eager = false,
}: {
  work: Work;
  decorative?: boolean;
  eager?: boolean;
}) {
  const cover = covers[work.id];
  return (
    <span className="cover">
      <img
        src={cover.src}
        alt={decorative ? "" : cover.alt}
        width={800}
        height={1200}
        decoding="async"
        loading={eager ? "eager" : "lazy"}
      />
      <span className="cover-shade" />
      <span className="cover-copy">
        <span className="cover-genre">{work.genre}</span>
        <span className="cover-title">{work.title}</span>
        <span className="cover-author">{work.author}</span>
      </span>
    </span>
  );
}
