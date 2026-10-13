export const pillars = [
  { number: "01", title: "The Thesis Defines the Corpus", body: "Ten contemporary African literary pieces published from 2000 onward: five poems, one critical essay, two short stories, and two speculative fiction works. This is the thesis's working inventory, not a claim that ten texts represent the whole continent." },
  { number: "02", title: "Three Reading Lenses", body: "Read each selection structurally (literary elements and language), historically (context of creation), and socioculturally (lived experiences and values). A lens is a way into the text, not a label that explains everything." },
  { number: "03", title: "Six Approaches to Assess", body: "The thesis survey asks about information-based, moral-philosophical, personal-response, paraphrastic, language-based, and stylistic approaches. Teachers can combine them; no single approach is prescribed for every selection." },
  { number: "04", title: "A Classroom Resource, Not a Replacement", body: "The hub offers planning prompts, vocabulary support, discussion questions, and sample organizers. Teachers should use the original text from an authorized source and adapt materials to their class and school guidance." },
  { number: "05", title: "Compare With Care", body: "Connect a text with learners' experiences when useful, but do not treat African countries as interchangeable or imply that Philippine and African histories are identical. Let evidence from the text lead." },
];

export const models = [
  { name: "Information-Based", cite: "Thesis Survey · Appendix B", body: "Build a concise context base: author, place, time, genre, and only the background needed to understand the text. Check facts and avoid turning context into a lecture." },
  { name: "Moral-Philosophical", cite: "Thesis Survey · Appendix B", body: "Explore the ethical questions, values, and choices raised by the text. Ask learners to support interpretations with textual evidence rather than hunt for one approved moral." },
  { name: "Personal-Response", cite: "Thesis Survey · Appendix B", body: "Invite a reader's response or connection while making personal disclosure optional. Learners can respond to a character or idea instead of sharing private experiences." },
  { name: "Paraphrastic", cite: "Thesis Survey · Appendix B", body: "Unpack vocabulary, unfamiliar references, and literal meaning in manageable steps. Paraphrase to open the text, not to replace the writer's language or imagery." },
  { name: "Language-Based", cite: "Thesis Survey · Appendix B", body: "Study how word choice, patterns, sound, structure, and language variation create meaning. Keep the analysis tied to what the text actually does." },
  { name: "Stylistic", cite: "Thesis Survey · Appendix B", body: "Use focused tools to examine tone, mood, imagery, figures of speech, satire, and other choices. Graphic organizers can help learners point to evidence and explain its effect." },
];

export const clock = [
  {
    id: "open",
    mins: "5 min",
    title: "Set the Context",
    model: "Information-Based",
    image: "/images/Filipino Teacher (1).jpg",
    badge: "Author Origin & Geography",
    body: "Teacher move: introduce the author, country or community, genre, and one relevant historical or social detail. Ask learners to separate what the text says from what they assume. Why this matters: it reduces guesswork without suggesting one work represents all of Africa.",
    prompt: "Display the title and author. Ask: “What context do we need to read this fairly?”",
    studentMove: "Students identify the author's region and distinguish facts in the text from broad stereotypes.",
  },
  {
    id: "words",
    mins: "8 min",
    title: "Unlock Key Language",
    model: "Paraphrastic",
    image: "/images/Africa (2).jpg",
    badge: "Cultural Vocabulary & Tone",
    body: "Teacher move: pre-teach only a few words or references that block comprehension. Model a plain-language paraphrase, then return to the author's original wording. Why this matters: learners can enter a complex text without losing its distinctive language.",
    prompt: "Choose three or four words from the selected dossier, not a long glossary.",
    studentMove: "Students practice paraphrasing 3–4 essential idioms or cultural terms in plain English.",
  },
  {
    id: "read",
    mins: "12 min",
    title: "Read for Craft and Meaning",
    model: "Language-Based / Stylistic",
    image: "/images/covers/telephone.jpg",
    badge: "Close Reading & Imagery",
    body: "Teacher move: read an authorized copy aloud or have learners read it. Ask them to notice a repeated word, image, shift in tone, structural choice, or narrative detail. Why this matters: interpretation grows from evidence, not guesses about a culture.",
    prompt: "Give learners one small annotation task suited to this specific text.",
    studentMove: "Students annotate specific lines for tone shifts, metaphors, and structural rhythm.",
  },
  {
    id: "say",
    mins: "10 min",
    title: "Discuss the Text",
    model: "Moral-Philosophical",
    image: "/images/Filipino Teacher (3).jpg",
    badge: "Collaborative Textual Inquiry",
    body: "Teacher move: let pairs discuss a question about a character's choice, a value in tension, or the effect of a writer's choice. Ask for evidence and allow more than one defensible interpretation. Why this matters: students practise reasoning together rather than repeat a summary.",
    prompt: "Use one of the dossier questions; ask “Which detail in the text makes you say that?”",
    studentMove: "Pairs debate contrasting viewpoints and cite direct quotes to substantiate their interpretation.",
  },
  {
    id: "self",
    mins: "8 min",
    title: "Respond With Choice",
    model: "Personal-Response",
    image: "/images/Filipino Teacher (4).jpg",
    badge: "Differentiated Reflection",
    body: "Teacher move: offer a short written, drawn, or spoken response. Learners may connect an idea to their own lives, respond to a character, or discuss the text itself. Why this matters: response supports engagement, but personal disclosure is never required.",
    prompt: "Offer two options: “This connects with…” or “A choice the character makes is…”",
    studentMove: "Learners choose either an analytical note, creative response, or personal connection.",
  },
  {
    id: "bridge",
    mins: "7 min",
    title: "Check Understanding and Close",
    model: "Formative Check",
    image: "/images/Africa (6).jpg",
    badge: "Intercultural Bridge & Exit Ticket",
    body: "Teacher move: ask learners to state one supported interpretation and one question they still have. If appropriate, make a careful connection to a local context while naming what is different. Why this matters: the teacher sees what learners understood and what needs revisiting.",
    prompt: "Exit ticket: “One detail I can explain, and what it helps me understand, is…”",
    studentMove: "Each student submits a quick exit card identifying one textual insight and one ongoing question.",
  },
];

export const organizer = [
  { text: "Evidence From the Literary Text", near: "What does the detail show about the speaker, character, setting, or conflict?" },
  { text: "Context Needed to Interpret It", near: "What reliable background helps explain this detail without stereotyping a whole country or continent?" },
  { text: "A Careful Connection", near: "What might learners recognize from their own context—and what historical or cultural differences must remain clear?" },
];

export const committee = [
  { name: "Romel A. Pascua, Ph.D.", role: "Advisory Committee Chair" },
  { name: "Winicel May C. Ancheta, Ph.D.", role: "Member, Advisory Committee" },
  { name: "Jahnese D. Asuncion, Ph.D.", role: "Member, Advisory Committee" },
  { name: "Jeanette G. Dials, Ed.D.", role: "Member, Advisory Committee" },
];

export const roles = [
  "Grade 8 English Teacher",
  "Head Teacher",
  "Master Teacher",
  "Department Coordinator",
  "Advisory Committee",
  "Other",
];
