export const pillars = [
  { number: "01", title: "The thesis defines the corpus", body: "Ten contemporary African literary pieces published from 2000 onward: five poems, one critical essay, two short stories, and two speculative fiction works. This is the thesis's working inventory, not a claim that ten texts represent the whole continent." },
  { number: "02", title: "Three reading lenses", body: "Read each selection structurally (literary elements and language), historically (context of creation), and socioculturally (lived experiences and values). A lens is a way into the text, not a label that explains everything." },
  { number: "03", title: "Six approaches to assess", body: "The thesis survey asks about information-based, moral-philosophical, personal-response, paraphrastic, language-based, and stylistic approaches. Teachers can combine them; no single approach is prescribed for every selection." },
  { number: "04", title: "A classroom resource, not a replacement", body: "The hub offers planning prompts, vocabulary support, discussion questions, and sample organizers. Teachers should use the original text from an authorized source and adapt materials to their class and school guidance." },
  { number: "05", title: "Compare with care", body: "Connect a text with learners' experiences when useful, but do not treat African countries as interchangeable or imply that Philippine and African histories are identical. Let evidence from the text lead." },
];

export const models = [
  { name: "Information-based", cite: "Thesis survey · Appendix B", body: "Build a concise context base: author, place, time, genre, and only the background needed to understand the text. Check facts and avoid turning context into a lecture." },
  { name: "Moral-philosophical", cite: "Thesis survey · Appendix B", body: "Explore the ethical questions, values, and choices raised by the text. Ask learners to support interpretations with textual evidence rather than hunt for one approved moral." },
  { name: "Personal-response", cite: "Thesis survey · Appendix B", body: "Invite a reader's response or connection while making personal disclosure optional. Learners can respond to a character or idea instead of sharing private experiences." },
  { name: "Paraphrastic", cite: "Thesis survey · Appendix B", body: "Unpack vocabulary, unfamiliar references, and literal meaning in manageable steps. Paraphrase to open the text, not to replace the writer's language or imagery." },
  { name: "Language-based", cite: "Thesis survey · Appendix B", body: "Study how word choice, patterns, sound, structure, and language variation create meaning. Keep the analysis tied to what the text actually does." },
  { name: "Stylistic", cite: "Thesis survey · Appendix B", body: "Use focused tools to examine tone, mood, imagery, figures of speech, satire, and other choices. Graphic organizers can help learners point to evidence and explain its effect." },
];

export const clock = [
  { id: "open", mins: "5 min", title: "Set the context", model: "Information-based", body: "Teacher move: introduce the author, country or community, genre, and one relevant historical or social detail. Ask learners to separate what the text says from what they assume. Why this matters: it reduces guesswork without suggesting one work represents all of Africa.", prompt: "Display the title and author. Ask: “What context do we need to read this fairly?”" },
  { id: "words", mins: "8 min", title: "Unlock key language", model: "Paraphrastic", body: "Teacher move: pre-teach only a few words or references that block comprehension. Model a plain-language paraphrase, then return to the author's original wording. Why this matters: learners can enter a complex text without losing its distinctive language.", prompt: "Choose three or four words from the selected dossier, not a long glossary." },
  { id: "read", mins: "12 min", title: "Read for craft and meaning", model: "Language-based / Stylistic", body: "Teacher move: read an authorized copy aloud or have learners read it. Ask them to notice a repeated word, image, shift in tone, structural choice, or narrative detail. Why this matters: interpretation grows from evidence, not guesses about a culture.", prompt: "Give learners one small annotation task suited to this specific text." },
  { id: "say", mins: "10 min", title: "Discuss the text", model: "Moral-philosophical", body: "Teacher move: let pairs discuss a question about a character's choice, a value in tension, or the effect of a writer's choice. Ask for evidence and allow more than one defensible interpretation. Why this matters: students practise reasoning together rather than repeat a summary.", prompt: "Use one of the dossier questions; ask “Which detail in the text makes you say that?”" },
  { id: "self", mins: "8 min", title: "Respond with choice", model: "Personal-response", body: "Teacher move: offer a short written, drawn, or spoken response. Learners may connect an idea to their own lives, respond to a character, or discuss the text itself. Why this matters: response supports engagement, but personal disclosure is never required.", prompt: "Offer two options: “This connects with…” or “A choice the character makes is…”" },
  { id: "bridge", mins: "7 min", title: "Check understanding and close", model: "Formative check", body: "Teacher move: ask learners to state one supported interpretation and one question they still have. If appropriate, make a careful connection to a local context while naming what is different. Why this matters: the teacher sees what learners understood and what needs revisiting.", prompt: "Exit ticket: “One detail I can explain, and what it helps me understand, is…”" },
];

export const organizer = [
  { text: "Evidence from the literary text", near: "What does the detail show about the speaker, character, setting, or conflict?" },
  { text: "Context needed to interpret it", near: "What reliable background helps explain this detail without stereotyping a whole country or continent?" },
  { text: "A careful connection", near: "What might learners recognize from their own context—and what historical or cultural differences must remain clear?" },
];

export const committee = [
  { name: "Romel A. Pascua, Ph.D.", role: "Advisory committee chair" },
  { name: "Winicel May C. Ancheta, Ph.D.", role: "Member, Advisory Committee" },
  { name: "Jahnese D. Asuncion, Ph.D.", role: "Member, Advisory Committee" },
  { name: "Jeanette G. Dials, Ed.D.", role: "Member, Advisory Committee" },
];

export const roles = [
  "Grade 8 teacher",
  "Head teacher",
  "Master teacher",
  "Department coordinator",
  "Advisory committee",
  "Other",
];
