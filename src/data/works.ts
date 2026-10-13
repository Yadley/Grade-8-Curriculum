export type Genre = "Poetry" | "Short story" | "Essay" | "Novel" | "Speculative";

export type ModelName = "Cultural" | "Language" | "Personal growth";

export type Work = {
  id: string;
  number: string;
  title: string;
  author: string;
  life: string;
  country: string;
  region: string;
  era: string;
  genre: Genre;
  lens: string;
  model: ModelName;
  card: string;
  why: string;
  situation: string;
  note?: string;
  quote?: { text: string; cite: string };
  words: { term: string; gloss: string }[];
  bridge: string;
  questions: string[];
  focus: string;
};

export const genres = ["All", "Poetry", "Short story", "Essay", "Novel", "Speculative"] as const;
export type GenreFilter = (typeof genres)[number];

export const works: Work[] = [
  {
    id: "africa",
    number: "01",
    title: "Africa",
    author: "David Diop",
    life: "David Mandessi Diop, 1927–1960, the Senegalese poet linked with Negritude. Not the later French novelist of the same name.",
    country: "Senegal",
    region: "West Africa",
    era: "Modern, mid-20th century",
    genre: "Poetry",
    lens: "Masculinity and cultural identity",
    model: "Cultural",
    card: "A short poem that speaks to a continent as a beloved person, and asks it to stand up.",
    why: "It fits one period: direct address, a returning call, and a clear emotional arc. Masculinity here is protection and pride, not permission to dominate.",
    situation:
      "The speaker addresses Africa by name, remembers a strong past, names the harm of conquest, and insists that the beloved place will rise. Teach repetition and apostrophe before any lecture on a whole literary movement.",
    words: [
      { term: "Apostrophe", gloss: "Speaking to a person who is absent, or to a place as if it could answer." },
      { term: "Refrain", gloss: "A line or call that keeps coming back." },
      { term: "Subjugation", gloss: "Being forced under someone else’s power." },
      { term: "Resilience", gloss: "The capacity to stand again after harm." },
    ],
    bridge:
      "Filipino poems often speak to the motherland as if she could hear. Let students name that likeness, then keep the histories apart: Diop is answering European conquest in West Africa, not rewriting Philippine experience.",
    questions: [
      "Who is being spoken to, and what does the speaker want that addressee to do?",
      "Which repeated word carries the feeling of the poem?",
      "Where is strength shown as care, rather than as force?",
    ],
    focus: "In the reading block, have students mark the address, one repeated word, and the line where the mood turns.",
  },
  {
    id: "telephone",
    number: "02",
    title: "Telephone Conversation",
    author: "Wole Soyinka",
    life: "Wole Soyinka, born 1934, Nigerian poet, playwright, and novelist. Nobel Prize in Literature, 1986.",
    country: "Nigeria",
    region: "West Africa",
    era: "Modern classic",
    genre: "Poetry",
    lens: "Wit as social critique",
    model: "Language",
    card: "A polite phone call about a room to rent. Prejudice walks in, and precise language answers it.",
    why: "Grade 8 can hear irony if the situation is ordinary: housing, a phone, a question that should never have been asked. The poem rewards attention to word choice.",
    situation:
      "A speaker inquires about lodging. The landlady is at ease until she asks how dark the caller is. He replies with exact, cutting color-words. The laugh, if it comes, is on the prejudice, never on a person’s color.",
    words: [
      { term: "Irony", gloss: "A gap between what is said and what is meant." },
      { term: "Diction", gloss: "The writer’s choice of words, and why those words and not others." },
      { term: "Understatement", gloss: "Saying less, so the truth sounds louder." },
      { term: "Prejudice", gloss: "A judgment made before a person is known." },
    ],
    bridge:
      "Students know what it is to be sized up before they speak: by accent, by school, by address, by a surname. Use that recognition, and do not turn a Nigerian poem about a rented room into a contest with Philippine life.",
    questions: [
      "What does the landlady think she is allowed to ask?",
      "How does the speaker’s politeness make her question sound worse?",
      "Which single word would you keep if you had to teach the poem in one minute?",
    ],
    focus: "Read the poem aloud twice. On the second pass, students raise a hand when the power in the conversation shifts.",
  },
  {
    id: "water",
    number: "03",
    title: "Water",
    author: "Koleka Putuma",
    life: "Koleka Putuma, South African poet and theatre-maker. “Water” appears in Collective Amnesia (2017).",
    country: "South Africa",
    region: "Southern Africa",
    era: "Contemporary",
    genre: "Poetry",
    lens: "Feminism and historical memory",
    model: "Cultural",
    card: "Water as faith, as the sea, and as a record of who was allowed to be safe.",
    why: "The poem lets a class talk about memory and access through a woman’s voice, without treating African literature as only a story about men in the past.",
    situation:
      "The speaker looks at water as baptism and as ocean, and at the history carried in both. Public water was not equally open to everyone in South Africa. The poem asks who remembers, and who is believed.",
    note: "The poem holds grief, faith, and historical violence. Preview it. Keep the class frame on memory, access, and a woman’s voice. Offer a quiet alternative prompt if a student needs one.",
    words: [
      { term: "Baptism", gloss: "A religious washing that marks belonging." },
      { term: "Archive", gloss: "A store of memory, whether a building or a body." },
      { term: "Access", gloss: "Who is allowed to enter, use, or enjoy a place." },
      { term: "Speaker", gloss: "The voice inside the poem. Not always the same as the author." },
    ],
    bridge:
      "The Philippines is a country of water: crossings, storms, work at sea, and shores that are not equally safe or equally owned. Compare the feeling of water as memory. Do not pretend apartheid and Philippine history are the same event.",
    questions: [
      "What different kinds of water appear, and which one matters most to the speaker?",
      "Whose memory is treated as public, and whose is treated as private?",
      "What does the poem ask a reader to stop forgetting?",
    ],
    focus: "Students list three pictures of water and write whose body is near each one.",
  },
  {
    id: "home",
    number: "04",
    title: "Home",
    author: "Warsan Shire",
    life: "Warsan Shire, Somali-British poet. Her family is from Somalia. “Home” is widely taught as a poem about forced leaving.",
    country: "Somalia",
    region: "East Africa",
    era: "Contemporary",
    genre: "Poetry",
    lens: "Empathy and migration",
    model: "Personal growth",
    card: "A poem about leaving only when staying has become unbearable.",
    why: "Filipino classrooms already know departure. This poem insists on a distinction students can handle: some people leave for work, and some leave because home itself has turned dangerous.",
    situation:
      "The speaker explains why people flee. Home is not given up for adventure. It is left when the cost of staying is the body. The images are physical on purpose, so a reader cannot treat refugees as a headline.",
    note: "The poem names violence that pushes people out. Read it yourself before class. If you use a short excerpt, say so. Let a student write about ordinary home instead of personal danger if they prefer.",
    quote: {
      text: "No one leaves home unless home is the mouth of a shark.",
      cite: "Warsan Shire, “Home.” Confirm the wording against the copy your school is allowed to use.",
    },
    words: [
      { term: "Displacement", gloss: "Being forced out of the place that was home." },
      { term: "Refuge", gloss: "Safety looked for in another place." },
      { term: "Image", gloss: "A picture made of words, such as home compared to a shark." },
      { term: "Empathy", gloss: "Staying with another person’s feeling without taking their story as your own." },
    ],
    bridge:
      "Many Filipino families know the airport, the remittance, and the empty chair. Shire is writing about people who run from war and danger. Ask what the two departures share, and what a teacher must not blur.",
    questions: [
      "What has to be true before the speaker believes leaving is reasonable?",
      "Which image made the reason for leaving hardest to ignore?",
      "What would a careless reader miss if they only heard the word “migrant”?",
    ],
    focus: "Work from the shark image outward. Students paraphrase it in one plain sentence, then name what the metaphor refuses to soften.",
  },
  {
    id: "seamstress",
    number: "05",
    title: "The Careless Seamstress",
    author: "Tjawangwa Dema",
    life: "Tjawangwa Dema, Motswana poet. The title poem comes from her book The Careless Seamstress (2019).",
    country: "Botswana",
    region: "Southern Africa",
    era: "Contemporary",
    genre: "Poetry",
    lens: "Feminism and labor",
    model: "Language",
    card: "A title that sounds like an insult. The poem talks back on behalf of women’s work.",
    why: "The irony sits in the title, which Grade 8 can unlock before the poem is difficult. Craft, pay, and self-definition are large enough themes for a full period.",
    situation:
      "A seamstress is named careless. Read that word as a label other people are ready to stick on women’s skill. The poem’s interest is the work itself: thread, time, making, and the person who refuses to be only domestic scenery.",
    words: [
      { term: "Ironic", gloss: "When a title seems to mean one thing and argues for another." },
      { term: "Craft", gloss: "Skill that takes practice and should be recognized." },
      { term: "Domestic", gloss: "Having to do with the home. Here, also a workplace." },
      { term: "Speaker", gloss: "The voice who sews, remembers, or answers the label." },
    ],
    bridge:
      "Students can see school uniforms, altar cloths, shop signatures, and home-based garment work without leaving their own towns. Honor that labor. Dema’s poem is not a lesson about “all African women.” It is one artist’s argument with a dismissive word.",
    questions: [
      "Why might “careless” be the wrong word for this worker?",
      "What does the poem count as skill, even if a customer would not?",
      "Who usually gets to name another person’s work, and who talks back?",
    ],
    focus: "Before reading, students define “careless.” After reading, they rewrite the definition using only evidence from the poem.",
  },
  {
    id: "hands",
    number: "06",
    title: "The Hands of the Blacks",
    author: "Luís Bernardo Honwana",
    life: "Luís Bernardo Honwana, Mozambican writer. The story is also known from the Portuguese “As Mãos dos Pretos,” in English translation.",
    country: "Mozambique",
    region: "Southern Africa",
    era: "Modern",
    genre: "Short story",
    lens: "Dignity, and how adults answer a child",
    model: "Personal growth",
    card: "A child asks why palms are lighter. The adults disagree. The mother is the voice the story trusts.",
    why: "The situation is a question any curious child might ask, and the moral turn is clear enough for Grade 8. It also shows masculine authority failing, without a speech about masculinity.",
    situation:
      "A young narrator collects explanations from adults, including men who answer with pride, superstition, or contempt. His mother gives a different account: hands were made to match so people would remember that human work is done by human hands, and that a person is a person first. She weeps. He believes her.",
    note: "Some adults in the story offer degrading explanations. Do not ask students to repeat those explanations as facts, and do not let insult language become classroom talk. The mother’s answer is the moral center. Teach dignity, not the myth.",
    words: [
      { term: "Parable", gloss: "A short story that carries a moral question." },
      { term: "Dignity", gloss: "The worth a person has, and the respect that should follow." },
      { term: "Narrator", gloss: "The person telling the story. Here, a child." },
      { term: "Contrast", gloss: "A sharp difference. Here, between the adults’ answers." },
    ],
    bridge:
      "Filipino children also take hard questions to different adults and receive different kinds of answers. Ask whose answer in a household is treated as final, and what it costs a mother to tell the truth while crying. Do not restage the story’s insults.",
    questions: [
      "Why is the child not satisfied with the first answer he receives?",
      "What do the men’s answers protect, if it is not the child?",
      "What does the mother want him to understand about hands and work?",
    ],
    focus: "Students chart the answers in two columns: what was said, and whether it treats people as equal. They spend their words on the mother.",
  },
  {
    id: "budapest",
    number: "07",
    title: "Hitting Budapest",
    author: "NoViolet Bulawayo",
    life: "NoViolet Bulawayo, Zimbabwean writer. This story won the 2011 Caine Prize and later opened the novel We Need New Names.",
    country: "Zimbabwe",
    region: "Southern Africa",
    era: "Contemporary",
    genre: "Short story",
    lens: "Youth and unequal neighborhoods",
    model: "Personal growth",
    card: "Children cross into a rich suburb they call Budapest, and take guavas. Play and hunger share one afternoon.",
    why: "A child narrator, a clear journey, and a fruit Filipino readers know. The story teaches point of view and social contrast without a worksheet full of terms first.",
    situation:
      "Darling and her friends leave a crowded neighborhood and enter a wealthier suburb. They are children, so the trip can still feel like a game. The guavas also say that someone else’s trees are full while they are not. Stay inside that afternoon; do not summarize the whole novel.",
    words: [
      { term: "Suburb", gloss: "A district, often wealthier, at the edge of a city. Here the children name it Budapest." },
      { term: "Narrator", gloss: "Darling, the child through whose eyes we see the suburb." },
      { term: "Contrast", gloss: "Two conditions placed side by side: hunger and a street of plenty." },
      { term: "Coming-of-age", gloss: "A moment when a child’s view of the world gets harder to keep simple." },
    ],
    bridge:
      "Guava is not a foreign fruit in a Philippine classroom. Students know gates, subdivisions, and the feeling of looking in. Let them use that knowledge, and remind them Bulawayo is writing a specific city, Bulawayo, not “Africa” as one neighborhood.",
    questions: [
      "What do the children want, and what else is going on besides the game?",
      "How does a child’s voice change what a reader is willing to notice?",
      "What would the same afternoon sound like if a guard or a homeowner told it?",
    ],
    focus: "Students track one want and one rule the children break. Then they retell thirty seconds of the walk in their own barangay or street, without copying Darling’s life.",
  },
  {
    id: "how-to-write",
    number: "08",
    title: "How to Write About Africa",
    author: "Binyavanga Wainaina",
    life: "Binyavanga Wainaina, 1971–2019, Kenyan writer and editor. The essay appeared in Granta in 2005. He was more than this one piece: he also built a literary home for other writers in Kenya.",
    country: "Kenya",
    region: "East Africa",
    era: "Contemporary",
    genre: "Essay",
    lens: "Media literacy and satire",
    model: "Language",
    card: "A list of terrible instructions. The joke teaches readers how stereotypes are manufactured.",
    why: "It is the hub’s conscience. After this essay, a class has language for why ten different works are required, and why a sunset poster is not a literature lesson.",
    situation:
      "Wainaina writes in commands, as if coaching an outsider to describe a whole continent badly: one landscape, one kind of suffering, no ordinary weekday. The form is the lesson. Students should feel the joke turn, then catch the same habit in a picture or a clip.",
    words: [
      { term: "Satire", gloss: "Writing that copies a bad habit closely enough to expose it." },
      { term: "Trope", gloss: "A pattern used so often it stops telling the truth." },
      { term: "Imperative", gloss: "The grammar of a command. This essay is made of commands." },
      { term: "Media literacy", gloss: "Asking who made a picture of a place, and what was left out so the picture would stay simple." },
    ],
    bridge:
      "The Philippines is also flattened for outside eyes: storm, worker, or beach, with homework, humor, and ordinary streets edited away. Use one local example after the essay. Do not rank which country is misread more.",
    questions: [
      "Which “instruction” is the most absurd, and why is the absurdity useful?",
      "What kinds of African life does the essay say lazy writing erases?",
      "Where have you seen a real place reduced to one picture?",
    ],
    focus: "Students highlight five commands and rewrite one as an honest instruction for writing about their own town.",
  },
  {
    id: "things-fall-apart",
    number: "09",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    life: "Chinua Achebe, 1930–2013, Nigerian novelist. Teach a short excerpt from chapters 2 and 3 of Things Fall Apart (1958), not the whole novel.",
    country: "Nigeria",
    region: "West Africa",
    era: "Modern foundational",
    genre: "Novel",
    lens: "Reputation, work, and masculinity",
    model: "Cultural",
    card: "An Igbo household, a father’s fear of failure, and yam farming as a hard road to standing.",
    why: "Chapters 2 and 3 are concrete: a house, a debt of reputation, a crop, a community with rules. Students meet a society, not a stereotype of a village.",
    situation:
      "Okonkwo is famous and afraid of being thought weak, as he thought his father was. A boy, Ikemefuna, comes into the household as part of a settlement between towns. Yam farming shows how a man tries to build a life, and how a bad season can ruin the plan. Stop inside these chapters.",
    note: "Later chapters contain violence a Grade 8 class should not meet by surprise. If you will read past this excerpt, prepare them on another day. Do not describe Igbo life as a stand-in for all of Africa.",
    words: [
      { term: "Reputation", gloss: "The story a community already tells about a person." },
      { term: "Household", gloss: "The people living under one family’s authority and care." },
      { term: "Yam", gloss: "A staple crop. In this novel it also measures work, risk, and standing." },
      { term: "Excerpt", gloss: "A chosen part of a longer book. Say clearly that the class is not reading the whole novel." },
    ],
    bridge:
      "Filipino students understand family name, a parent’s fear of hiya, and seasons of farm or market work. Those are points of contact. Okonkwo’s titles, his wives’ household, and Umuofia’s rules are Igbo. Teach them as specific, not as “traditional culture” in general.",
    questions: [
      "What is Okonkwo afraid of, and how does that fear show in his house?",
      "What does a successful yam crop mean beyond food?",
      "Which rule of the community would you need explained before you could judge a character?",
    ],
    focus: "Students map one rule of the household and one risk of the farm. They write a margin note that begins, “I do not know yet…”",
  },
  {
    id: "spider",
    number: "10",
    title: "Spider the Artist",
    author: "Nnedi Okorafor",
    life: "Nnedi Okorafor, Nigerian-American writer. She has described this story as Eme’s encounter with machines built to guard oil pipelines. It has appeared in Lightspeed Magazine and in later collections.",
    country: "Nigeria",
    region: "West Africa",
    era: "Contemporary Africanfuturism",
    genre: "Speculative",
    lens: "Feminism, music, and technology",
    model: "Personal growth",
    card: "In a near-future Niger Delta, a woman’s guitar draws a pipeline robot close enough to listen.",
    why: "It ends the shelf in the future, with a woman whose art is practical intelligence. Students see that African literature includes science fiction, not only memory.",
    situation:
      "Eme lives beside oil pipelines in the Niger Delta. Her marriage is violent. At night she plays her father’s guitar. One of the machines assigned to protect the pipeline — she comes to call it Udide Okwanka, Spider the Artist, after an Igbo figure — is drawn to the music. Art opens a contact the company did not design.",
    note: "The story includes domestic violence and a deadly conflict around stolen fuel. Preview the ending. For many Grade 8 classes, teach the meeting through music and stop before the catastrophe. Tell students you are doing that.",
    quote: {
      text: "One day a lonely but artistically gifted woman named Eme unexpectedly finds a way to communicate with lethal machines built to guard the oil pipelines.",
      cite: "Nnedi Okorafor, describing “Spider the Artist” in a Lightspeed Magazine author spotlight.",
    },
    words: [
      {
        term: "Speculative fiction",
        gloss: "A story that changes a rule of the world — often technology or the future — in order to ask a human question.",
      },
      {
        term: "Africanfuturism",
        gloss: "Okorafor’s term for futures rooted first in Africa, rather than a generic science-fiction future with African decoration.",
      },
      { term: "Pipeline", gloss: "The line that moves oil. In the story it is also a border through people’s lives." },
      { term: "Protagonist", gloss: "Eme, the person whose choices and music the story follows." },
    ],
    bridge:
      "Students may know a place changed by a mine, a plant, a port, or a plantation: work arrives, and so does damage. Music as a room of one’s own will also be familiar. Keep the Niger Delta specific. A robot in a Philippine story would guard something else.",
    questions: [
      "What is the machine built to protect, and what does it notice instead?",
      "How is Eme’s music more than a hobby?",
      "Why does it matter that this future is imagined in the Niger Delta, not in a nameless elsewhere?",
    ],
    focus: "Students draw the triangle: Eme, the guitar, the machine. They label what each one wants. Leave the ending for a second day if you use it.",
  },
];

export function findWork(id: string) {
  return works.find((work) => work.id === id);
}
