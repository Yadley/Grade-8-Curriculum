import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqXYKIXk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var links = [
	["Overview", "#top"],
	["Criteria", "#criteria"],
	["Corpus", "#corpus"],
	["Toolkits", "#toolkits"],
	["Access", "#access"],
	["Study", "#study"]
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rail" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap header-bar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "brand",
						href: "#top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mark",
							"aria-hidden": "true",
							children: "A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-name",
							children: "Literature Hub"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-sub",
							children: "Grade 8 English"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "nav-desktop",
						"aria-label": "Page",
						children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-link",
							href,
							children: label
						}, href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "menu-btn",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: open ? "nav-panel open" : "nav-panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nav-panel-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "wrap nav-mobile",
						"aria-label": "Page",
						children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							onClick: () => setOpen(false),
							children: label
						}, href))
					})
				})
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero",
		id: "top",
		"aria-labelledby": "hero-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker hero-kicker",
						children: "MMSU Graduate School · Laoag City"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						id: "hero-title",
						className: "display",
						children: [
							"African literature, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "opened" }),
							" for class."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "hero-fig",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/og.jpg",
							alt: "Overhead view of an open blank book, a terracotta clothbound book on a deep green one, a green woven ribbon, and small orange flowers on warm paper.",
							width: 1200,
							height: 630
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "A shelf, not a postcard. Ten works, ready for a single period." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rest",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lede",
								children: "Supplementary packages for Grade 8 English under the Revised K to 10 Curriculum. Context, vocabulary, and a timed path for the African texts in the Afro-Asian literature quarter."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "byline",
								children: ["Tarisai Tara Mabuto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " · MAEd Language and Literature · Mariano Marcos State University" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-primary",
									href: "#corpus",
									children: "Explore the ten works"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-ghost",
									href: "#toolkits",
									children: "See the lesson clock"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "selected works" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "genres, from poem to future" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "minutes, mapped move by move" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Carter & Long models" })]
					})
				]
			})]
		})
	});
}
var pillars = [
	{
		number: "01",
		title: "Not one story",
		body: "Pride, wit, memory, flight, labor, childhood, satire, reputation, and technology. Several of these works never ask a class to begin with a wound. A continent is not a theme."
	},
	{
		number: "02",
		title: "Gender as experience",
		body: "Putuma, Dema, and Okorafor lead with women’s voices, work, and decisions. Diop, Honwana, and Achebe take masculinity seriously as duty, fear, and status, including where men fail a child. Neither set is a slogan."
	},
	{
		number: "03",
		title: "Time, not a museum",
		body: "Diop, Soyinka, Honwana, and Achebe keep the modern foundation in view. Putuma, Shire, Dema, Bulawayo, Wainaina, and Okorafor are contemporary. Students should hear that African literature is still being written."
	},
	{
		number: "04",
		title: "A real class period",
		body: "Each dossier assumes 45 to 60 minutes, a shared copy or a read-aloud, and vocabulary before literary jargon. The reader in mind is Grade 8 in a Philippine public high school, not a university seminar."
	},
	{
		number: "05",
		title: "A bridge that does not flatten",
		body: "Every work offers a Filipino point of contact: family, work, migration, reputation, neighborhood, water, or industry. Each dossier also says what must not be treated as the same history."
	}
];
var models = [
	{
		name: "Cultural",
		cite: "Carter & Long, 1991",
		body: "The text is a made thing from a real place and time. Students learn context so they do not invent a costume version of a society. The teacher is responsible for accuracy."
	},
	{
		name: "Language",
		cite: "Carter & Long, 1991",
		body: "Literature is language doing more than usual. Irony, a repeated word, a command form, a child’s diction. This is the model that serves English, not only “appreciation.”"
	},
	{
		name: "Personal growth",
		cite: "Carter & Long, 1991",
		body: "Readers connect, then notice the limit of the connection. The aim is a more awake person, not a diary that replaces the text. Enjoyment is a result, not a poster on the wall."
	}
];
var clock = [
	{
		id: "open",
		mins: "5 min",
		title: "Name the world",
		model: "Cultural",
		body: "Country, rough date, and one sentence on why this is not “the African story.” Students write the place and one thing they already know, even if that thing is “nothing yet.”"
	},
	{
		id: "words",
		mins: "8 min",
		title: "Unlock the words",
		model: "Language",
		body: "Teach the four words in the dossier, not a glossary of twenty. Students paraphrase one sentence you read aloud. If copies are scarce, hearing the text still counts as reading."
	},
	{
		id: "read",
		mins: "12 min",
		title: "Read for a choice",
		model: "Language",
		body: "Students mark one image, one human decision, and one word that surprised them. In a poem they also mark a word that returns. Use the dossier’s reading focus so the block does not wander."
	},
	{
		id: "say",
		mins: "10 min",
		title: "Say it back",
		model: "Cultural",
		body: "Pairs answer: what is at stake for a person in this text? Correct only mix-ups about place or history. Do not correct a feeling as if it were a fact error."
	},
	{
		id: "self",
		mins: "8 min",
		title: "Answer as yourself",
		model: "Personal growth",
		body: "A short write: where have I seen a pressure like this, without pretending the histories match? Students who do not want to be personal may write about a character’s choice instead."
	},
	{
		id: "bridge",
		mins: "7 min",
		title: "Bridge, then leave",
		model: "Personal growth",
		body: "Use the dossier’s bridge. Exit ticket: one sentence they could teach a classmate who was absent. In a 45-minute period, fold this into the previous block. In a 60-minute period, give the personal write the extra ten minutes."
	}
];
var organizer = [
	{
		text: "Children cross into a suburb they call Budapest and take guavas.",
		near: "Young people move between places that do not share the same food, shade, or ease."
	},
	{
		text: "The afternoon is still a game, because the narrator is a child.",
		near: "A barkada can be hungry and playful in the same hour. The voice matters."
	},
	{
		text: "The suburb is seen from outside the gate.",
		near: "Students know the feeling of looking at a gate they did not grow up behind."
	}
];
var committee = [
	{
		name: "Romel A. Pascua, Ph.D.",
		role: "Advisory committee chair"
	},
	{
		name: "Winicel May Ancheta, Ph.D.",
		role: "Committee member"
	},
	{
		name: "Jahnese Asuncion, Ph.D.",
		role: "Committee member"
	},
	{
		name: "Jeanette Dials",
		role: "Committee member"
	}
];
var roles = [
	"Grade 8 teacher",
	"Head teacher",
	"Master teacher",
	"Department coordinator",
	"Advisory committee",
	"Other"
];
function Criteria() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "block",
		id: "criteria",
		"aria-labelledby": "criteria-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Selection criteria"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "criteria-title",
							className: "section-title",
							children: "Why these ten, and not a single famous name."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Grade 8 English asks learners to evaluate Afro-Asian poetry and prose for meaning, purpose, and audience, and to write from an expanding cultural identity. This shelf is an input for that work. It is not the whole curriculum, and it does not stand in for Asia."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pillars",
					children: pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "pillar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pillar-no",
								children: pillar.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: pillar.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: pillar.body })
						]
					}, pillar.number))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quote-band",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("q", { children: "Ten texts cannot represent a continent. They can stop a syllabus from pretending one text is enough." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Selection principle for this hub. West 4 · Southern 4 · East 2. The imbalance is stated, not hidden." })]
				})
			]
		})
	});
}
var genres = [
	"All",
	"Poetry",
	"Short story",
	"Essay",
	"Novel",
	"Speculative"
];
var works = [
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
		situation: "The speaker addresses Africa by name, remembers a strong past, names the harm of conquest, and insists that the beloved place will rise. Teach repetition and apostrophe before any lecture on a whole literary movement.",
		words: [
			{
				term: "Apostrophe",
				gloss: "Speaking to a person who is absent, or to a place as if it could answer."
			},
			{
				term: "Refrain",
				gloss: "A line or call that keeps coming back."
			},
			{
				term: "Subjugation",
				gloss: "Being forced under someone else’s power."
			},
			{
				term: "Resilience",
				gloss: "The capacity to stand again after harm."
			}
		],
		bridge: "Filipino poems often speak to the motherland as if she could hear. Let students name that likeness, then keep the histories apart: Diop is answering European conquest in West Africa, not rewriting Philippine experience.",
		questions: [
			"Who is being spoken to, and what does the speaker want that addressee to do?",
			"Which repeated word carries the feeling of the poem?",
			"Where is strength shown as care, rather than as force?"
		],
		focus: "In the reading block, have students mark the address, one repeated word, and the line where the mood turns."
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
		situation: "A speaker inquires about lodging. The landlady is at ease until she asks how dark the caller is. He replies with exact, cutting color-words. The laugh, if it comes, is on the prejudice, never on a person’s color.",
		words: [
			{
				term: "Irony",
				gloss: "A gap between what is said and what is meant."
			},
			{
				term: "Diction",
				gloss: "The writer’s choice of words, and why those words and not others."
			},
			{
				term: "Understatement",
				gloss: "Saying less, so the truth sounds louder."
			},
			{
				term: "Prejudice",
				gloss: "A judgment made before a person is known."
			}
		],
		bridge: "Students know what it is to be sized up before they speak: by accent, by school, by address, by a surname. Use that recognition, and do not turn a Nigerian poem about a rented room into a contest with Philippine life.",
		questions: [
			"What does the landlady think she is allowed to ask?",
			"How does the speaker’s politeness make her question sound worse?",
			"Which single word would you keep if you had to teach the poem in one minute?"
		],
		focus: "Read the poem aloud twice. On the second pass, students raise a hand when the power in the conversation shifts."
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
		situation: "The speaker looks at water as baptism and as ocean, and at the history carried in both. Public water was not equally open to everyone in South Africa. The poem asks who remembers, and who is believed.",
		note: "The poem holds grief, faith, and historical violence. Preview it. Keep the class frame on memory, access, and a woman’s voice. Offer a quiet alternative prompt if a student needs one.",
		words: [
			{
				term: "Baptism",
				gloss: "A religious washing that marks belonging."
			},
			{
				term: "Archive",
				gloss: "A store of memory, whether a building or a body."
			},
			{
				term: "Access",
				gloss: "Who is allowed to enter, use, or enjoy a place."
			},
			{
				term: "Speaker",
				gloss: "The voice inside the poem. Not always the same as the author."
			}
		],
		bridge: "The Philippines is a country of water: crossings, storms, work at sea, and shores that are not equally safe or equally owned. Compare the feeling of water as memory. Do not pretend apartheid and Philippine history are the same event.",
		questions: [
			"What different kinds of water appear, and which one matters most to the speaker?",
			"Whose memory is treated as public, and whose is treated as private?",
			"What does the poem ask a reader to stop forgetting?"
		],
		focus: "Students list three pictures of water and write whose body is near each one."
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
		situation: "The speaker explains why people flee. Home is not given up for adventure. It is left when the cost of staying is the body. The images are physical on purpose, so a reader cannot treat refugees as a headline.",
		note: "The poem names violence that pushes people out. Read it yourself before class. If you use a short excerpt, say so. Let a student write about ordinary home instead of personal danger if they prefer.",
		quote: {
			text: "No one leaves home unless home is the mouth of a shark.",
			cite: "Warsan Shire, “Home.” Confirm the wording against the copy your school is allowed to use."
		},
		words: [
			{
				term: "Displacement",
				gloss: "Being forced out of the place that was home."
			},
			{
				term: "Refuge",
				gloss: "Safety looked for in another place."
			},
			{
				term: "Image",
				gloss: "A picture made of words, such as home compared to a shark."
			},
			{
				term: "Empathy",
				gloss: "Staying with another person’s feeling without taking their story as your own."
			}
		],
		bridge: "Many Filipino families know the airport, the remittance, and the empty chair. Shire is writing about people who run from war and danger. Ask what the two departures share, and what a teacher must not blur.",
		questions: [
			"What has to be true before the speaker believes leaving is reasonable?",
			"Which image made the reason for leaving hardest to ignore?",
			"What would a careless reader miss if they only heard the word “migrant”?"
		],
		focus: "Work from the shark image outward. Students paraphrase it in one plain sentence, then name what the metaphor refuses to soften."
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
		situation: "A seamstress is named careless. Read that word as a label other people are ready to stick on women’s skill. The poem’s interest is the work itself: thread, time, making, and the person who refuses to be only domestic scenery.",
		words: [
			{
				term: "Ironic",
				gloss: "When a title seems to mean one thing and argues for another."
			},
			{
				term: "Craft",
				gloss: "Skill that takes practice and should be recognized."
			},
			{
				term: "Domestic",
				gloss: "Having to do with the home. Here, also a workplace."
			},
			{
				term: "Speaker",
				gloss: "The voice who sews, remembers, or answers the label."
			}
		],
		bridge: "Students can see school uniforms, altar cloths, shop signatures, and home-based garment work without leaving their own towns. Honor that labor. Dema’s poem is not a lesson about “all African women.” It is one artist’s argument with a dismissive word.",
		questions: [
			"Why might “careless” be the wrong word for this worker?",
			"What does the poem count as skill, even if a customer would not?",
			"Who usually gets to name another person’s work, and who talks back?"
		],
		focus: "Before reading, students define “careless.” After reading, they rewrite the definition using only evidence from the poem."
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
		situation: "A young narrator collects explanations from adults, including men who answer with pride, superstition, or contempt. His mother gives a different account: hands were made to match so people would remember that human work is done by human hands, and that a person is a person first. She weeps. He believes her.",
		note: "Some adults in the story offer degrading explanations. Do not ask students to repeat those explanations as facts, and do not let insult language become classroom talk. The mother’s answer is the moral center. Teach dignity, not the myth.",
		words: [
			{
				term: "Parable",
				gloss: "A short story that carries a moral question."
			},
			{
				term: "Dignity",
				gloss: "The worth a person has, and the respect that should follow."
			},
			{
				term: "Narrator",
				gloss: "The person telling the story. Here, a child."
			},
			{
				term: "Contrast",
				gloss: "A sharp difference. Here, between the adults’ answers."
			}
		],
		bridge: "Filipino children also take hard questions to different adults and receive different kinds of answers. Ask whose answer in a household is treated as final, and what it costs a mother to tell the truth while crying. Do not restage the story’s insults.",
		questions: [
			"Why is the child not satisfied with the first answer he receives?",
			"What do the men’s answers protect, if it is not the child?",
			"What does the mother want him to understand about hands and work?"
		],
		focus: "Students chart the answers in two columns: what was said, and whether it treats people as equal. They spend their words on the mother."
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
		situation: "Darling and her friends leave a crowded neighborhood and enter a wealthier suburb. They are children, so the trip can still feel like a game. The guavas also say that someone else’s trees are full while they are not. Stay inside that afternoon; do not summarize the whole novel.",
		words: [
			{
				term: "Suburb",
				gloss: "A district, often wealthier, at the edge of a city. Here the children name it Budapest."
			},
			{
				term: "Narrator",
				gloss: "Darling, the child through whose eyes we see the suburb."
			},
			{
				term: "Contrast",
				gloss: "Two conditions placed side by side: hunger and a street of plenty."
			},
			{
				term: "Coming-of-age",
				gloss: "A moment when a child’s view of the world gets harder to keep simple."
			}
		],
		bridge: "Guava is not a foreign fruit in a Philippine classroom. Students know gates, subdivisions, and the feeling of looking in. Let them use that knowledge, and remind them Bulawayo is writing a specific city, Bulawayo, not “Africa” as one neighborhood.",
		questions: [
			"What do the children want, and what else is going on besides the game?",
			"How does a child’s voice change what a reader is willing to notice?",
			"What would the same afternoon sound like if a guard or a homeowner told it?"
		],
		focus: "Students track one want and one rule the children break. Then they retell thirty seconds of the walk in their own barangay or street, without copying Darling’s life."
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
		situation: "Wainaina writes in commands, as if coaching an outsider to describe a whole continent badly: one landscape, one kind of suffering, no ordinary weekday. The form is the lesson. Students should feel the joke turn, then catch the same habit in a picture or a clip.",
		words: [
			{
				term: "Satire",
				gloss: "Writing that copies a bad habit closely enough to expose it."
			},
			{
				term: "Trope",
				gloss: "A pattern used so often it stops telling the truth."
			},
			{
				term: "Imperative",
				gloss: "The grammar of a command. This essay is made of commands."
			},
			{
				term: "Media literacy",
				gloss: "Asking who made a picture of a place, and what was left out so the picture would stay simple."
			}
		],
		bridge: "The Philippines is also flattened for outside eyes: storm, worker, or beach, with homework, humor, and ordinary streets edited away. Use one local example after the essay. Do not rank which country is misread more.",
		questions: [
			"Which “instruction” is the most absurd, and why is the absurdity useful?",
			"What kinds of African life does the essay say lazy writing erases?",
			"Where have you seen a real place reduced to one picture?"
		],
		focus: "Students highlight five commands and rewrite one as an honest instruction for writing about their own town."
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
		situation: "Okonkwo is famous and afraid of being thought weak, as he thought his father was. A boy, Ikemefuna, comes into the household as part of a settlement between towns. Yam farming shows how a man tries to build a life, and how a bad season can ruin the plan. Stop inside these chapters.",
		note: "Later chapters contain violence a Grade 8 class should not meet by surprise. If you will read past this excerpt, prepare them on another day. Do not describe Igbo life as a stand-in for all of Africa.",
		words: [
			{
				term: "Reputation",
				gloss: "The story a community already tells about a person."
			},
			{
				term: "Household",
				gloss: "The people living under one family’s authority and care."
			},
			{
				term: "Yam",
				gloss: "A staple crop. In this novel it also measures work, risk, and standing."
			},
			{
				term: "Excerpt",
				gloss: "A chosen part of a longer book. Say clearly that the class is not reading the whole novel."
			}
		],
		bridge: "Filipino students understand family name, a parent’s fear of hiya, and seasons of farm or market work. Those are points of contact. Okonkwo’s titles, his wives’ household, and Umuofia’s rules are Igbo. Teach them as specific, not as “traditional culture” in general.",
		questions: [
			"What is Okonkwo afraid of, and how does that fear show in his house?",
			"What does a successful yam crop mean beyond food?",
			"Which rule of the community would you need explained before you could judge a character?"
		],
		focus: "Students map one rule of the household and one risk of the farm. They write a margin note that begins, “I do not know yet…”"
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
		situation: "Eme lives beside oil pipelines in the Niger Delta. Her marriage is violent. At night she plays her father’s guitar. One of the machines assigned to protect the pipeline — she comes to call it Udide Okwanka, Spider the Artist, after an Igbo figure — is drawn to the music. Art opens a contact the company did not design.",
		note: "The story includes domestic violence and a deadly conflict around stolen fuel. Preview the ending. For many Grade 8 classes, teach the meeting through music and stop before the catastrophe. Tell students you are doing that.",
		quote: {
			text: "One day a lonely but artistically gifted woman named Eme unexpectedly finds a way to communicate with lethal machines built to guard the oil pipelines.",
			cite: "Nnedi Okorafor, describing “Spider the Artist” in a Lightspeed Magazine author spotlight."
		},
		words: [
			{
				term: "Speculative fiction",
				gloss: "A story that changes a rule of the world — often technology or the future — in order to ask a human question."
			},
			{
				term: "Africanfuturism",
				gloss: "Okorafor’s term for futures rooted first in Africa, rather than a generic science-fiction future with African decoration."
			},
			{
				term: "Pipeline",
				gloss: "The line that moves oil. In the story it is also a border through people’s lives."
			},
			{
				term: "Protagonist",
				gloss: "Eme, the person whose choices and music the story follows."
			}
		],
		bridge: "Students may know a place changed by a mine, a plant, a port, or a plantation: work arrives, and so does damage. Music as a room of one’s own will also be familiar. Keep the Niger Delta specific. A robot in a Philippine story would guard something else.",
		questions: [
			"What is the machine built to protect, and what does it notice instead?",
			"How is Eme’s music more than a hobby?",
			"Why does it matter that this future is imagined in the Niger Delta, not in a nameless elsewhere?"
		],
		focus: "Students draw the triangle: Eme, the guitar, the machine. They label what each one wants. Leave the ending for a second day if you use it."
	}
];
var RIGHTS = "Teaching layer only. The literary text is not reproduced. Use the copy your school is allowed to read. Do not photocopy an entire copyrighted work for distribution.";
function workPack(work) {
	const words = work.words.map((word) => `- ${word.term}: ${word.gloss}`).join("\n");
	const questions = work.questions.map((question, index) => `${index + 1}. ${question}`).join("\n");
	return [
		`${work.number}  ${work.title}`,
		`${work.author} · ${work.country} · ${work.region}`,
		work.life,
		`${work.genre} · ${work.era}`,
		`Lens: ${work.lens}`,
		`First model: ${work.model} (Carter & Long, 1991)`,
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
		RIGHTS
	].filter(Boolean).join("\n");
}
function teacherPack() {
	return `${[
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
		"CARTER & LONG — THREE MODELS",
		...models.map((model) => `${model.name}. ${model.body}`),
		"",
		"A 50-MINUTE CLOCK",
		"5 + 8 + 12 + 10 + 8 + 7. Shrink the last two moves in a 45-minute period. Give the personal write the extra time in a 60-minute period.",
		...clock.map((step) => `${step.mins} · ${step.title} · ${step.model}\n${step.body}`),
		"",
		"WORKED BRIDGE — HITTING BUDAPEST",
		"In the text: children cross into a suburb and take guavas.",
		"Near us: young people move between places that do not share the same ease.",
		"Keep Bulawayo’s city specific. Guava can be the point of contact; the history is not interchangeable.",
		"",
		RIGHTS,
		"",
		"TEN DOSSIERS",
		""
	].join("\n\n")}\n\n${works.map((work) => workPack(work)).join("\n\n----------\n\n")}\n`;
}
function downloadText(filename, text) {
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
function printPack() {
	const popup = window.open("", "_blank", "noopener,noreferrer");
	if (!popup) return false;
	const safe = teacherPack().replaceAll("&", "&").replaceAll("<", "<").replaceAll(">", ">");
	popup.document.write(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>African Literature Hub — teacher pack</title>
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
function Dossier({ work, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: work !== null,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "sheet-pos",
			children: work ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sheet-bar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kicker",
						children: [
							work.number,
							" · ",
							work.genre
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
						className: "btn btn-ghost",
						type: "button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							"aria-hidden": "true",
							size: 18
						}), "Close"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sheet-body dossier",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: work.title })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
								className: "sr-only",
								children: [
									"Teaching dossier for ",
									work.title,
									" by ",
									work.author,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "meta-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: work.author }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: work.country }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: work.region }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: work.era })
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: work.life }),
						work.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note",
							children: work.note
						}) : null,
						work.quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "pull",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("q", { children: work.quote.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { children: work.quote.cite })]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Why this text" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: work.why })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Situation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: work.situation })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Words to unlock" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "words",
							children: work.words.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: word.term }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: word.gloss })] }, word.term))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "In the twelve-minute read" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: work.focus }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "fine",
								children: [
									"First model: ",
									work.model,
									". Lens: ",
									work.lens,
									"."
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Bridge" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: work.bridge })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Ask the class" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "ask",
							children: work.questions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: question }, question))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-primary",
								onClick: () => downloadText(`${work.number}-${work.id}-dossier.txt`, workPack(work)),
								children: "Download this dossier"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fine",
							children: "Teaching dossier only. The literary text is not reproduced here. Bring the copy your school is allowed to read."
						})
					]
				})]
			}) : null
		})] })
	});
}
function matches(work, query) {
	if (!query) return true;
	return [
		work.title,
		work.author,
		work.country,
		work.region,
		work.lens,
		work.genre,
		work.card
	].join(" ").toLowerCase().includes(query);
}
function Corpus() {
	const [genre, setGenre] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const needle = query.trim().toLowerCase();
	const visible = (0, import_react.useMemo)(() => works.filter((work) => (genre === "All" || work.genre === genre) && matches(work, needle)), [genre, needle]);
	const open = works.find((work) => work.id === openId) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "block",
		id: "corpus",
		"aria-labelledby": "corpus-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Literary corpus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "corpus-title",
							className: "section-title",
							children: "Ten doors. Open any one."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Poetry 5, short stories 2, a critical essay, a novel excerpt, and one work of speculative fiction. Tap a row for the dossier: context, words, a bridge, and three questions."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "toolbar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "lbl",
							children: ["Search by title, author, or country", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Try Soyinka, guava, Kenya…",
								type: "search"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "chips",
							role: "group",
							"aria-label": "Filter by genre",
							children: genres.map((item) => {
								const count = item === "All" ? works.length : works.filter((work) => work.genre === item).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "chip",
									"aria-pressed": genre === item,
									onClick: () => setGenre(item),
									children: [
										item,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "count",
											children: count
										})
									]
								}, item);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "result-line",
							children: [
								"Showing ",
								visible.length,
								" of ",
								works.length
							]
						})
					]
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "empty",
					children: "No work matches that search. Try a country, an author, or clear the genre."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "works",
					children: visible.map((work) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "work",
						onClick: () => setOpenId(work.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "work-no",
								children: work.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "work-genre",
									children: work.genre
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "work-title",
									children: work.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "work-meta",
									children: [
										work.author,
										" · ",
										work.country
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "work-card",
									children: work.card
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "work-open",
								children: "Open dossier"
							})
						]
					}, work.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dossier, {
			work: open,
			onClose: () => setOpenId(null)
		})]
	});
}
function Toolkit() {
	const [openId, setOpenId] = (0, import_react.useState)(clock[0].id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "block",
		id: "toolkits",
		"aria-labelledby": "toolkit-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Pedagogical toolkits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "toolkit-title",
							className: "section-title",
							children: "Three models. Six moves. One period."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Carter and Long named three models in 1991: cultural, language, and personal growth. The clock below is a classroom sequence drawn from those models. It is not a fourth, fifth, and sixth model wearing their names."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "models",
					children: models.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "model",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: model.cite
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: model.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: model.body })
						]
					}, model.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "clock",
					children: clock.map((step) => {
						const open = openId === step.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "clock-item",
							"aria-expanded": open,
							onClick: () => setOpenId(step.id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "clock-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: step.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mins",
										children: step.mins
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "model-tag",
									children: step.model
								}),
								open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.body }) : null
							]
						}, step.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "organizer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Graphic organizer · worked example"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "subhead",
							children: "Hitting Budapest, beside us"
						})] }),
						organizer.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pair",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "In the text" }), row.text] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Near us" }), row.near] })]
						}, row.text)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fine",
							children: "Each dossier carries its own bridge. This one is filled in so a teacher can see the comparison before asking students to make one."
						})
					]
				})
			]
		})
	});
}
function Access() {
	const [markup, setMarkup] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("The code opens this page on a phone.");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const url = `${window.location.origin}${window.location.pathname}`;
		import_lib.toString(url, {
			type: "svg",
			margin: 1,
			width: 196,
			color: {
				dark: "#1e4d2b",
				light: "#fbf6ee"
			}
		}).then((svg) => setMarkup(svg)).catch(() => setMessage("The code could not be drawn. Copy the link instead."));
	}, []);
	async function copyLink() {
		const url = window.location.href;
		try {
			await navigator.clipboard.writeText(url);
		} catch {
			const area = document.createElement("textarea");
			area.value = url;
			document.body.appendChild(area);
			area.select();
			document.execCommand("copy");
			area.remove();
		}
		setCopied(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "block band",
		id: "access",
		"aria-labelledby": "access-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap access-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Digital access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "access-title",
					className: "section-title",
					children: "Take the shelf into the room."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "Download the teacher pack, or let a phone scan the card. The pack holds every dossier, the selection criteria, and the 50-minute clock. The poems and stories stay with their authors. You bring the licensed copy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "actions stack-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-paper",
							onClick: () => downloadText("african-literature-grade8-teacher-pack.txt", teacherPack()),
							children: "Download the teacher pack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-paper",
							onClick: () => {
								if (!printPack()) setMessage("Pop-ups are blocked. Download the pack instead.");
							},
							children: "Print the pack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn-paper",
							onClick: copyLink,
							children: copied ? "Link copied" : "Copy page link"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "qr-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "qr-svg",
					role: "img",
					"aria-label": "QR code that opens this hub",
					dangerouslySetInnerHTML: markup ? { __html: markup } : void 0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message })]
			})]
		})
	});
}
var STORAGE_KEY = "alh-feedback-v1";
function Study() {
	const [notes, setNotes] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [school, setSchool] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)(roles[0]);
	const [work, setWork] = (0, import_react.useState)("The whole shelf");
	const [rating, setRating] = (0, import_react.useState)(0);
	const [comment, setComment] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) setNotes(parsed);
		} catch {
			setNotes([]);
		}
	}, []);
	function persist(next) {
		setNotes(next);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	}
	function submit(event) {
		event.preventDefault();
		if (rating < 1) {
			setError("Choose a usefulness rating from 1 to 5.");
			return;
		}
		if (comment.trim().length < 8) {
			setError("Write a short comment so a later reader knows what you tried.");
			return;
		}
		persist([{
			id: crypto.randomUUID(),
			name: name.trim(),
			school: school.trim(),
			role,
			work,
			rating,
			comment: comment.trim(),
			at: (/* @__PURE__ */ new Date()).toLocaleString()
		}, ...notes]);
		setComment("");
		setRating(0);
		setError("");
		setSaved("Saved on this device. Nothing was sent to a server.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "block",
		id: "study",
		"aria-labelledby": "study-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "block-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "About the study"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "study-title",
							className: "section-title",
							children: "Inputs for supplementary materials."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Grade 8 English Teachers’ Literary Selections, Strategies and Challenges in Teaching African Literature: Inputs for Supplementary Based Materials."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This page is the developmental output named by that title. It is a teaching shelf for the Schools Division of Laoag City, offered openly so a teacher can use it on a phone between bells. It is not the thesis manuscript, and it does not replace the Revised K to 10 curriculum guide." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "people",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "person",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Tarisai Tara Mabuto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Researcher · MAEd candidate, Language and Literature" })]
						}),
						committee.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "person",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: person.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: person.role })]
						}, person.name)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "person",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Mariano Marcos State University Graduate School" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Laoag City" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "form-grid stack-lg",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Classroom note"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "subhead",
								children: "Tell the shelf what happened in the room."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "help",
								children: "Optional, and stored only on this phone or computer, in keeping with the spirit of Republic Act No. 10173. No account. No upload."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "lbl",
								children: ["Name, if you want it kept", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									value: name,
									onChange: (event) => setName(event.target.value)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "lbl",
								children: ["School", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									value: school,
									onChange: (event) => setSchool(event.target.value)
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "lbl",
								children: ["Role", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "field",
									value: role,
									onChange: (event) => setRole(event.target.value),
									children: roles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "lbl",
								children: ["Which work", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "field",
									value: work,
									onChange: (event) => setWork(event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "The whole shelf" }), works.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { children: [
										item.number,
										" ",
										item.title
									] }, item.id))]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "lbl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Usefulness in a real period" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ratings",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": rating === value,
										onClick: () => setRating(value),
										children: value
									}, value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "help",
									children: "1 is hard to use in class. 5 is ready to teach on Monday."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "lbl",
							children: ["Comment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "field",
								value: comment,
								onChange: (event) => setComment(event.target.value),
								placeholder: "What held, and what a 50-minute class still needs."
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "error",
							children: error
						}) : null,
						saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "status",
							role: "status",
							children: saved
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-primary",
							type: "submit",
							children: "Save on this device"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "notes",
					children: notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "help",
						children: "Nothing saved on this device yet."
					}) : notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "note-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
								note.rating,
								"/5 · ",
								note.work
							] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: note.comment }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "who",
								children: [
									note.name || "Unsigned",
									note.role,
									note.school,
									note.at
								].filter(Boolean).join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-btn",
								onClick: () => persist(notes.filter((item) => item.id !== note.id)),
								children: "Remove this note"
							})
						]
					}, note.id))
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "site-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "African Literature Hub" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tarisai Tara Mabuto · MAEd Language and Literature" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mariano Marcos State University Graduate School · Laoag City" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Advisory chair: Romel A. Pascua, Ph.D." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Republic Act No. 10173 · Revised K to 10 Curriculum" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Optional comments stay on the device that wrote them." })
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#content",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Criteria, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corpus, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolkit, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Access, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Study, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
