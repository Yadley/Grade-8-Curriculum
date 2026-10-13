export type Genre = "Poetry" | "Short Story" | "Critical Essay" | "Speculative Fiction";
export type ModelName = "Information-Based" | "Moral-Philosophical" | "Personal-Response" | "Paraphrastic" | "Language-Based" | "Stylistic";

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

export const genres = ["All", "Poetry", "Short Story", "Critical Essay", "Speculative Fiction"] as const;
export type GenreFilter = (typeof genres)[number];

export const works: Work[] = [
  {
    id: "water", number: "01", title: "Water", author: "Koleka Putuma",
    life: "Koleka Putuma is a South African poet and theatre-maker. “Water” appears in Collective Amnesia (2017).",
    country: "South Africa", region: "Southern Africa", era: "2017", genre: "Poetry", lens: "Historical memory and the sociocultural meaning of water", model: "Stylistic",
    card: "Water becomes more than a natural element: it carries memory, faith, exclusion, and historical pain.",
    why: "The poem supports close attention to imagery and the relationship between personal voice and public history. Preview the complete text before teaching.",
    situation: "Invite learners to notice how the poem's treatment of water changes across contexts. Establish the South African historical context carefully rather than treating the poem as a general story about the continent.",
    note: "The work addresses historical trauma and colonial violence. Preview it, use an authorized copy, and provide a low-pressure alternative response if a learner needs one.",
    words: [{term:"Imagery",gloss:"Language that helps a reader imagine a sensory experience."},{term:"Historical memory",gloss:"How people remember and interpret events from the past."},{term:"Symbol",gloss:"An image or object that carries meaning beyond itself."},{term:"Speaker",gloss:"The voice speaking in a poem; not automatically the poet."}],
    bridge: "Learners may connect water with travel, livelihood, faith, or community in the Philippines. Compare how water carries meaning, but do not equate South African apartheid history with Philippine history.",
    questions: ["What different meanings does water carry in the poem?","Which image or shift most changes your understanding of the speaker's perspective?","How does the poem connect personal memory with shared history?"],
    focus: "Learners identify two images of water, explain their possible meanings, and support one interpretation with evidence from the authorized text."
  },
  {
    id: "vocabulary", number: "02", title: "Vocabulary", author: "Safia Elhillo",
    life: "Safia Elhillo is a Sudanese-American poet. “Vocabulary” appears in The January Children (2017).",
    country: "Sudan / United States", region: "Northeast Africa / diaspora", era: "2017", genre: "Poetry", lens: "Language, translation, and cultural identity", model: "Language-Based",
    card: "A poem that uses the feel of a vocabulary test to explore what language can—and cannot—translate.",
    why: "Its form creates a natural entry into word choice, ambiguity, bilingual identity, and the limits of one-to-one translation.",
    situation: "Have learners notice the poem's test-like structure and consider how a word can carry meanings or associations that do not fit neatly into another language.",
    words: [{term:"Ambiguity",gloss:"When a word or expression can reasonably carry more than one meaning."},{term:"Translation",gloss:"Expressing meaning from one language in another."},{term:"Diction",gloss:"A writer's choices of words."},{term:"Identity",gloss:"The ways a person understands and expresses who they are."}],
    bridge: "Learners who use Filipino, Ilocano, English, or other languages may recognize that some expressions do not translate exactly. Invite examples without suggesting all multilingual experiences are the same.",
    questions: ["How does the test-like structure shape the reading experience?","What can be lost when a word is translated without its cultural context?","Which language choices help communicate identity?"],
    focus: "Learners select one word or phrase from the authorized poem and explain why a direct translation may not carry its full meaning."
  },
  {
    id: "home", number: "03", title: "Home", author: "Warsan Shire",
    life: "Warsan Shire is a Somali-British poet whose work often explores home, migration, belonging, and displacement.",
    country: "Somalia / United Kingdom", region: "East Africa / diaspora", era: "2015 (as identified in the thesis inventory)", genre: "Poetry", lens: "Forced migration and the meaning of home", model: "Personal-Response",
    card: "A poem that asks readers to consider the conditions that can force people to leave home.",
    why: "The poem offers a way to discuss imagery, empathy, displacement, and how public narratives represent people who flee danger.",
    situation: "Frame the reading around the speaker's language and the conditions behind forced departure. Distinguish forced displacement from migration for other reasons.",
    note: "The poem includes intense imagery of danger and displacement. Preview it, avoid asking students to disclose personal trauma, and allow a text-focused alternative to personal reflection.",
    words: [{term:"Displacement",gloss:"Being forced to leave one's home or usual place."},{term:"Metaphor",gloss:"A comparison that describes one thing in terms of another."},{term:"Refuge",gloss:"Protection or safety from danger."},{term:"Empathy",gloss:"Trying to understand another person's experience without claiming it as your own."}],
    bridge: "Learners may know migration through family or community stories. Make room for different experiences and clarify that the poem focuses on forced departure under dangerous conditions.",
    questions: ["What conditions does the speaker present as reasons for leaving?","Which image shapes your understanding most strongly, and why?","How might a media headline oversimplify the people represented in the poem?"],
    focus: "Learners paraphrase one image in plain language and explain what it communicates about the speaker's situation."
  },
  {
    id: "seamstress", number: "04", title: "The Careless Seamstress", author: "Tjawangwa Dema",
    life: "Tjawangwa Dema is a Motswana poet. The Careless Seamstress is the title of her 2019 poetry collection.",
    country: "Botswana", region: "Southern Africa", era: "2019", genre: "Poetry", lens: "Gender, labor, and agency", model: "Moral-Philosophical",
    card: "A poem for examining how language assigns value to women's work, skill, and agency.",
    why: "The title invites analysis of labels and assumptions. It can support discussion of labor and gender without treating one poem as representative of all African women.",
    situation: "Ask learners to consider the title's word “careless” and how the poem complicates expectations around work, gender, and recognition. Verify the poem's details against the authorized edition.",
    words: [{term:"Agency",gloss:"The capacity to make choices and act."},{term:"Label",gloss:"A word or category used to describe a person, sometimes unfairly."},{term:"Irony",gloss:"A contrast between an apparent meaning and a deeper or different one."},{term:"Labor",gloss:"Work, including work that may be undervalued or unpaid."}],
    bridge: "Learners can discuss how different kinds of work are valued in their communities. Invite evidence-based comparison while keeping Botswana's context distinct.",
    questions: ["What assumptions can the word “careless” carry?","How does the poem represent work and agency?","Who gets to define whether another person's work is valuable?"],
    focus: "Learners unpack the title, then revise their first interpretation using details from the poem."
  },
  {
    id: "yesterday-afternoon", number: "05", title: "what they did yesterday afternoon", author: "Warsan Shire",
    life: "Warsan Shire is a Somali-British poet. The thesis identifies this poem as a 2014 selection.",
    country: "Somalia / United Kingdom", region: "East Africa / diaspora", era: "2014 (as identified in the thesis inventory)", genre: "Poetry", lens: "Conflict, displacement, and media distance", model: "Personal-Response",
    card: "A poem for exploring the contrast between lived experience of conflict and distant accounts of it.",
    why: "It can help learners examine voice, perspective, and how language shapes the distance between an event and the people who experience it.",
    situation: "Guide learners to attend to perspective and the poem's portrayal of everyday life affected by conflict. Confirm publication details and text wording using the edition available to the school.",
    note: "The subject may be distressing. Preview the text and keep discussion focused on literary evidence rather than asking learners to share personal experiences of violence.",
    words: [{term:"Perspective",gloss:"The position or viewpoint from which something is presented."},{term:"Displacement",gloss:"Being forced to leave one's home or usual place."},{term:"Tone",gloss:"The attitude conveyed by a speaker or writer."},{term:"Contrast",gloss:"A difference made clear by placing things side by side."}],
    bridge: "Discuss how headlines, posts, or reports can create distance from real people. Do not compare suffering competitively or assume learners share the same experiences.",
    questions: ["Whose perspective is centered in the poem?","How does the language affect the distance between readers and the people described?","What might a detached media account leave out?"],
    focus: "Learners identify a shift in perspective or tone and explain how it shapes the poem's effect."
  },
  {
    id: "how-to-write", number: "06", title: "How to Write About Africa", author: "Binyavanga Wainaina",
    life: "Binyavanga Wainaina (1971–2019) was a Kenyan writer and editor. The satirical essay appeared in Granta in 2005.",
    country: "Kenya", region: "East Africa", era: "2005", genre: "Critical Essay", lens: "Stereotypes, satire, and representation", model: "Stylistic",
    card: "A satirical essay that exposes recurring clichés used to flatten the representation of Africa.",
    why: "The essay provides a direct route into media literacy, tone, command forms, satire, and the ethical choices involved in describing a place.",
    situation: "Wainaina imitates the voice of someone giving instructions for writing about Africa in stereotyped ways. Learners should recognize that the essay is criticizing those habits, not endorsing them.",
    words: [{term:"Satire",gloss:"Writing that exposes a flaw by imitating or exaggerating it."},{term:"Stereotype",gloss:"An oversimplified idea applied to a group."},{term:"Imperative",gloss:"A grammatical form used to give a command."},{term:"Representation",gloss:"The way people, places, or events are portrayed."}],
    bridge: "Learners can consider how the Philippines or Laoag is sometimes reduced to a single image. Use the comparison to question representation, not to rank whose stereotypes are worse.",
    questions: ["How does the essay use commands to create satire?","Which cliché is exposed, and what reality does it erase?","What responsibilities does a writer have when describing a place and its people?"],
    focus: "Learners identify two satirical instructions and explain how each reveals a stereotype."
  },
  {
    id: "budapest", number: "07", title: "Hitting Budapest", author: "NoViolet Bulawayo",
    life: "NoViolet Bulawayo is a Zimbabwean writer. “Hitting Budapest” won the 2011 Caine Prize for African Writing and later became the opening chapter of We Need New Names.",
    country: "Zimbabwe", region: "Southern Africa", era: "2011", genre: "Short Story", lens: "Childhood, inequality, and point of view", model: "Information-Based",
    card: "Children's point of view makes play, hunger, and unequal neighborhoods visible in the same afternoon.",
    why: "The story supports discussion of narrator, setting, social contrast, and how a child's perspective shapes what readers notice.",
    situation: "The children travel from their neighborhood to a wealthier area they call Budapest. Discuss the journey and the guavas as story details; avoid reducing Zimbabwe to poverty or treating the characters as representatives of every child there.",
    words: [{term:"Narrator",gloss:"The voice that tells a story."},{term:"Setting",gloss:"The time and place in which a story occurs."},{term:"Contrast",gloss:"A difference made clear by placing details side by side."},{term:"Point of view",gloss:"The perspective through which readers encounter events."}],
    bridge: "Learners may recognize differences between neighborhoods or access to resources. Compare how setting shapes experience without claiming the fictional neighborhood is the whole of Zimbabwe.",
    questions: ["What does the children's point of view help readers notice?","How does the setting reveal inequality without a direct lecture?","How might the scene change if another character narrated it?"],
    focus: "Learners select one detail about the neighborhood and explain what it reveals through the child's point of view."
  },
  {
    id: "greet-home", number: "08", title: "Who Will Greet You at Home", author: "Lesley Nneka Arimah",
    life: "Lesley Nneka Arimah is a Nigerian writer. “Who Will Greet You at Home” appeared in The New Yorker in 2015 and was a finalist for the 2017 Caine Prize.",
    country: "Nigeria", region: "West Africa", era: "2015", genre: "Short Story", lens: "Motherhood, social expectations, class, and magical realism", model: "Moral-Philosophical",
    card: "A speculative premise—babies crafted from different materials—opens difficult questions about motherhood and social pressure.",
    why: "The story's imaginative premise gives learners a way to analyze symbolism, social expectations, and how speculative elements reveal real pressures.",
    situation: "Discuss the story's crafted babies as a speculative device and examine how class and expectations shape the characters' choices. Avoid presenting one cultural account as a universal Nigerian experience.",
    note: "The story addresses intense expectations around motherhood and may touch on grief or reproductive pressure. Preview it and allow students to respond analytically rather than personally.",
    words: [{term:"Magical realism",gloss:"A narrative mode in which extraordinary elements appear within a recognizable world."},{term:"Symbolism",gloss:"The use of an image or object to suggest broader meaning."},{term:"Social expectation",gloss:"A belief about how a person is supposed to behave or live."},{term:"Class",gloss:"Social and economic position, including access to resources."}],
    bridge: "Learners can examine how communities set expectations for family life while respecting differences in belief and experience. Do not invite speculation about classmates' families or private circumstances.",
    questions: ["What does the story's unusual premise allow the writer to explore?","How do class and social expectations influence the characters?","What does the story invite readers to question rather than simply accept?"],
    focus: "Learners choose one crafted material or recurring image and explain how it contributes to the story's social critique."
  },
  {
    id: "spider-artist", number: "09", title: "Spider the Artist", author: "Nnedi Okorafor",
    life: "Nnedi Okorafor is a Nigerian-American writer known for speculative fiction. “Spider the Artist” appeared in Kabu Kabu (2013); confirm the exact edition used for teaching.",
    country: "Nigeria", region: "West Africa", era: "2008 (as identified in the thesis inventory)", genre: "Speculative Fiction", lens: "Oil extraction, technology, environment, and resistance", model: "Information-Based",
    card: "A speculative story connects music and technology with the social and environmental effects of oil extraction.",
    why: "The story supports speculative reading and discussion of how imagined technology can illuminate real environmental and political concerns.",
    situation: "Help learners distinguish the story's imagined elements from the real-world context of oil extraction in the Niger Delta. Verify the publication details against the edition being used.",
    words: [{term:"Speculative fiction",gloss:"Fiction that imagines alternatives to the world as it is."},{term:"Extraction",gloss:"Removing a resource from the earth or a place."},{term:"Resistance",gloss:"Actions taken to oppose or challenge a force."},{term:"Setting",gloss:"The time and place in which a story occurs."}],
    bridge: "Learners may connect the story's environmental questions to local discussions about land, energy, or livelihoods. Keep the Niger Delta's specific history and communities in view.",
    questions: ["How does the speculative element help the story explore a real issue?","What role does music play in the conflict or resistance?","Whose interests are affected by the technology and resource extraction?"],
    focus: "Learners make a two-column note: one imagined element in the story, and one real-world issue it helps readers consider."
  },
  {
    id: "five-years", number: "10", title: "Five Years Next Sunday", author: "Idza Luhumyo",
    life: "Idza Luhumyo is a Kenyan writer. “Five Years Next Sunday” is identified in the thesis inventory as a 2022 speculative work and associated with the Caine Prize for African Writing.",
    country: "Kenya", region: "East Africa", era: "2022 (as identified in the thesis inventory)", genre: "Speculative Fiction", lens: "Climate, resource commodification, and folklore", model: "Stylistic",
    card: "A speculative narrative draws on folklore to ask who controls resources and what communities owe the future.",
    why: "The work brings climate concerns, narrative form, and traditional knowledge into the corpus without treating African speculative fiction as a single genre or worldview.",
    situation: "Invite learners to track the story's imagined future and the role of the rainmaker. Verify plot details and publication information against the approved edition before preparing a lesson.",
    words: [{term:"Commodification",gloss:"Treating something primarily as a product or thing to be bought and sold."},{term:"Folklore",gloss:"Stories, beliefs, and practices shared within a community over time."},{term:"Climate",gloss:"Long-term patterns of weather in a place or region."},{term:"Speculative",gloss:"Imagining a possible world or future beyond current reality."}],
    bridge: "Learners can discuss water, weather, and shared resources in their own communities. Use the comparison to open questions, not to claim that local and Kenyan contexts are identical.",
    questions: ["What does the imagined future reveal about present choices?","How does folklore shape the story's world and its conflicts?","Who controls the resource at the center of the story, and who bears the consequences?"],
    focus: "Learners identify one detail about the imagined future and explain how it changes the way they think about a present-day issue."
  }
];
