// update types
export type UpdateTag = "talk" | "paper" | "milestone";

export type Link = {
  text: string;
  url: string;
};

export type Update = {
  text: string;
  month: string;
  year: number;
  tags: UpdateTag[];
  links?: Link[];
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updates: Update[] = [
  {
    text: "Our paper, Towards Accurate Translation via Semantically Appropriate Application of Lexical Constraints, is accepted as Findings to ACL 2023! °˖➴",
    month: "Jun",
    year: 2023,
    tags: ["paper"],
    links: [
      {
        text: "Towards Accurate Translation via Semantically Appropriate Application of Lexical Constraints",
        url: "https://aclanthology.org/2023.findings-acl.298/",
      },
    ],
  },
  {
    text: "Started my Ph.D. journey at University of Maryland! .☘︎ ݁˖",
    month: "Aug",
    year: 2023,
    tags: ["milestone"],
  },
  {
    text: "Our paper, ✎✐ Guiding Large Language Models to Post-Edit Machine Translation with Error Annotations, is accepted as Findings to NAACL 2024!",
    month: "Jan",
    year: 2024,
    tags: ["paper"],
    links: [
      {
        text: "Guiding Large Language Models to Post-Edit Machine Translation with Error Annotations",
        url: "https://aclanthology.org/2024.findings-naacl.265/",
      },
    ],
  },
  {
    text: "Excited to start my internship at Adobe Research with the Document Intelligence & Real-time Algorithms Team! ツ",
    month: "Jun",
    year: 2024,
    tags: ["milestone"],
  },
  {
    text: "Our survey paper, The Prompt Report: A Systematic Survey of Prompting Techniques, is out now! I led the multilingual section ✌︎︎",
    month: "Jun",
    year: 2024,
    tags: ["paper"],
    links: [
      {
        text: "The Prompt Report: A Systematic Survey of Prompting Techniques",
        url: "https://arxiv.org/abs/2406.06608",
      },
    ],
  },
  {
    text: "Our workshop paper, ꗃ Cross-lingual QA: A Key to Unlocking In-context Cross-lingual Performance, is accepted to ICML 2024! This work was done during my internship at LG AI Research.",
    month: "Jun",
    year: 2024,
    tags: ["paper"],
    links: [
      {
        text: "Cross-lingual QA: A Key to Unlocking In-context Cross-lingual Performance",
        url: "https://arxiv.org/abs/2305.15233",
      },
    ],
  },
  {
    text: "Our Lost in Translation project is now launched at the Planet Word Museum in Washington, D.C.! 𖡼.𖤣𖥧𖡼.𖤣𖥧",
    month: "Jun",
    year: 2024,
    tags: ["milestone"],
    links: [
      {
        text: "Planet Word Museum",
        url: "https://planetwordmuseum.org/events/language-science-station-51/",
      },
    ],
  },
  {
    text: "Our workshop paper, ⿻ Mitigating Semantic Leakage in Cross-lingual Embeddings via Orthogonality Constraint, is accpeted to ACL 2024! This work was done during my internship at NAVER.",
    month: "Aug",
    year: 2024,
    tags: ["paper"],
    links: [
      {
        text: "Mitigating Semantic Leakage in Cross-lingual Embeddings via Orthogonality Constraint",
        url: "https://aclanthology.org/2024.repl4nlp-1.19/",
      },
    ],
  },
  {
    text: "I gave a remote talk at ▶︎ •၊၊||၊• University of Toronto & Ontario Tech University about my paper, Guiding Large Language Models to Post-Edit Machine Translation with Error Annotations!",
    month: "Oct",
    year: 2024,
    tags: ["talk"],
    links: [
      {
        text: "Guiding Large Language Models to Post-Edit Machine Translation with Error Annotations",
        url: "https://aclanthology.org/2024.findings-naacl.265/",
      },
    ],
  },
  {
    text: "Our paper, ✎ᝰ Automatic Input Rewriting Improves Translation with Large Language Models, is accepted to NAACL 2025! See you in New Mexico! ✈︎",
    month: "Jan",
    year: 2025,
    tags: ["paper"],
    links: [
      {
        text: "Automatic Input Rewriting Improves Translation with Large Language Models",
        url: "https://aclanthology.org/2025.naacl-long.542/",
      },
    ],
  },
  {
    text: "Looking forward to spending the summer at Johns Hopkins University as a visiting scholar! .☘︎ ݁˖",
    month: "Apr",
    year: 2025,
    tags: ["milestone"],
  },
  {
    text: "Our papers, 𐦂𖨆𐀪𖠋 Multiple LLM Agents Debate for Equitable Cultural Alignment is accepted to ACL 2025 and .ᐣ.ᐟ AskQE: Question Answering as Automatic Evaluation for Machine Translation as Findings to ACL 2025! See you in Vienna! ✈︎",
    month: "May",
    year: 2025,
    tags: ["paper"],
    links: [
      {
        text: "Multiple LLM Agents Debate for Equitable Cultural Alignment",
        url: "https://aclanthology.org/2025.acl-long.1210/",
      },
      {
        text: "AskQE: Question Answering as Automatic Evaluation for Machine Translation",
        url: "https://aclanthology.org/2025.findings-acl.899/",
      },
    ],
  },
  {
    text: "Our ACL 2025 paper, Multiple LLM Agents Debate for Equitable Cultural Alignment is selected for an ⭑ oral ⭑ presentation (top 8%)!",
    month: "Jun",
    year: 2025,
    tags: ["paper"],
    links: [
      {
        text: "Multiple LLM Agents Debate for Equitable Cultural Alignment",
        url: "https://aclanthology.org/2025.acl-long.1210/",
      },
    ],
  },
  {
    text: "Our proposal, Empowering Reliable Use of Machine Translation through Q&A Feedback, has been selected for a talk at AMTA 2025 Virtual! ✌︎︎",
    month: "Jul",
    year: 2025,
    tags: ["talk"],
    links: [
      {
        text: "AMTA 2025 Virtual",
        url: "https://web.cvent.com/event/30c59791-b932-449a-a9d9-397d5d0e5ae8/websitePage:645d57e4-75eb-4769-b2c0-f201a0bfc6ce",
      },
    ],
  },
  {
    text: "Our papers, ⌯⌲ Should I Share this Translation? Evaluating Quality Feedback for User Reliance on Machine Translation and ✐ Toward Machine Translation Literacy: How Lay Users Perceive and Rely on Imperfect Translations are both accepted to EMNLP 2025! The first paper is also accepted to HCI+NLP Workshop @ EMNLP 2025. ♡",
    month: "Aug",
    year: 2025,
    tags: ["paper"],
    links: [
      {
        text: "Should I Share this Translation? Evaluating Quality Feedback for User Reliance on Machine Translation",
        url: "https://aclanthology.org/2025.emnlp-main.606/",
      },
      {
        text: "Toward Machine Translation Literacy: How Lay Users Perceive and Rely on Imperfect Translations",
        url: "https://aclanthology.org/2025.emnlp-main.1725/",
      },
      {
        text: "HCI+NLP Workshop",
        url: "https://sites.google.com/view/hciandnlp/home",
      },
    ],
  },
  {
    text: "I successfully proposed my Ph.D. thesis: Towards Trustworthy AI-Mediated Communication Across Languages and Cultures! Now I'm officially a Ph.D. candidate! ♥︎",
    month: "Dec",
    year: 2025,
    tags: ["milestone"],
  },
  {
    text: "Excited to start my research internship at Microsoft in Redmond this summer! ⋆☀︎.",
    month: "Feb",
    year: 2026,
    tags: ["milestone"],
  },
  {
    text: "I'm honored to be nominated for the University of Maryland’s Outstanding Graduate Assistant Reward! 𑁍ࠬܓ I'm grateful to my advisor and the Computer Science Department for their support and guidance!",
    month: "Mar",
    year: 2026,
    tags: ["milestone"],
    links: [
      {
        text: "Outstanding Graduate Assistant Reward",
        url: "https://gradschool.umd.edu/funding/student-fellowships-awards/outstanding-graduate-assistant-awards",
      }
    ]
  },
];


// sort updates by date
updates.sort((a, b) => {
  if (a.year === b.year) {
    // use months array to sort by month
    return months.indexOf(b.month) - months.indexOf(a.month);
  }
  return b.year - a.year;
});
export const allUpdates = updates;
