// publication types
export type Tag = "mt" | "multi" | "culture" | "hci" | "misc";

export type Pub = {
  title: string;
  author: string;
  venue: string;
  year: number;
  oral: string;
  workshop: string;
  image: string;
  tags: Tag[];
  summary?: string;
  paper?: string;
  paper2?: string;
  demo?: string;
  code?: string;
  project?: string;
  video?: string;
  poster?: string;
};

// import images from dir
import constraint from "../../images/pubs/new/constraint.png";
import crosslingualQA from "../../images/pubs/new/crosslingualQA.png";
import culturedebate from "../../images/pubs/new/culturedebate.png";
import guiding from "../../images/pubs/new/guiding.png";
import oracle from "../../images/pubs/new/oracle.png";
import promptreport from "../../images/pubs/new/promptreport.png";
import rewrite from "../../images/pubs/new/rewrite.png";
import trustinmt from "../../images/pubs/new/trustinmt2.png";
import askqe from "../../images/pubs/new/askqe.png";
import graphicbench from "../../images/pubs/new/graphicbench.png";
import sharemt from "../../images/pubs/new/sharemt.png";
import langpreference from "../../images/pubs/new/langpreference.png";
// import explanation from "../../images/pubs/new/explanation.png";
import neologism from "../../images/pubs/new/neologism.png";
import haid from "../../images/pubs/new/haid.png";
import saturation from "../../images/pubs/new/saturation.png";


const pubs: Pub[] = [
  {
    title: "Reheat Nachos for Dinner? Evaluating AI Support for Cross-Cultural Communication of Neologisms",
    author:
      "Dayeon Ki*, Yu Hou*, Rachel Rudinger, Hal Daume III, Marine Carpuat, Fumeng Yang",
    venue: "Preprint",
    image: neologism,
    summary:
      "We conduct human-subjects study to assess the utility of AI tools in supporting informal cross-cultural communication between non-native and native English speakers.",
    paper: "https://drive.google.com/file/d/1cVa0FPbDkskaZ2wok5U3lNErjLIE8LCH/view?usp=sharing",
    year: 2026,
    oral: "",
    workshop: "",
    tags: ["culture", "hci"],
  },
  {
    title: "Linguistic Nepotism: Trading-off Quality for Language Preference in Multilingual RAG",
    author:
      "Dayeon Ki, Marine Carpuat, Paul McNamee, Daniel Khashabi, Eugene Yang, Dawn Lawrie, Kevin Duh",
    venue: "Preprint",
    image: langpreference,
    summary:
      "We propose a controlled methodology showing that in multilingual RAG, models often favor citing English evidence documents, even at the cost of relevance.",
    paper: "http://arxiv.org/abs/2509.13930",
    code: "https://github.com/dayeonki/linguistic_nepotism",
    year: 2026,
    oral: "",
    workshop: "",
    tags: ["multi"],
  },
  {
    title: "In the Shadow of Judgment: Mapping Out the Landscape of Human–AI Decision-Making Through a Systematic Review",
    author:
      "Yixin Bai, Taehyun Yang, Zhongzheng Xu, Dayeon Ki, Ziyi Wang, Yu Hou, Fumeng Yang",
    venue: "Preprint",
    image: haid,
    summary:
      "We present a systematic review of human-AI decision-making (HAID) publications from 2016 to 2024.",
    paper: "https://www.techrxiv.org/users/1019835/articles/1380041-in-the-shadow-of-judgment-mapping-out-the-landscape-of-human-ai-decision-making-through-a-systematic-review",
    year: 2026,
    oral: "",
    workshop: "",
    tags: ["hci"],
  },
  {
    title: "When AI Benchmarks Plateau: A Systematic Study of Benchmark Saturation",
    author:
      "Mubashara Akhtar, Anka Reuel, ..., Dayeon Ki, ...",
    venue: "Preprint",
    image: saturation,
    summary:
      "We analyze benchmark saturation across 60 LLM benchmarks and characterize them along 14 properties to identify factors driving saturation.",
    paper: "https://www.arxiv.org/abs/2602.16763",
    year: 2026,
    oral: "",
    workshop: "",
    tags: ["misc"],
  },
  // {
  //   title: "Effects of AI-Generated Explanations on Lay Users’ Reliance on Imperfect Machine Translation",
  //   author:
  //     "Yimin Xiao, Yongle Zhang, Dayeon Ki, Charlotte Vaughn, Ge Gao, Marine Carpuat",
  //   venue: "Preprint",
  //   image: explanation,
  //   summary:
  //     "We conduct huamn study at a public museum to investigate the effects of AI-generated explanations on users' sense-making of machine translation outputs.",
  //   paper: "https://drive.google.com/file/d/19B7G8qhT8lg8EJlaiCr64t05kIBF957A/view?usp=sharing",
  //   year: 2026,
  //   oral: "",
  //   workshop: "",
  //   tags: ["hci", "mt"],
  // },
  {
    title:
      "Should I Share this Translation? Evaluating Quality Feedback for User Reliance on Machine Translation",
    author:
      "Dayeon Ki, Kevin Duh, Marine Carpuat",
    venue: "EMNLP",
    image: sharemt,
    summary:
      "We explore four types of quality feedback for enhancing decision accuracy and appropriate reliance on machine translation decision-making.",
    year: 2025,
    paper: "https://aclanthology.org/2025.emnlp-main.606/",
    code: "https://github.com/dayeonki/mt_quality_feedback",
    oral: "",
    workshop: "& HCI+NLP 2025",
    tags: ["hci", "mt"],
  },
  {
    title:
      "Toward Machine Translation Literacy: How Lay Users Perceive and Rely on Imperfect Translations",
    author:
      "Yimin Xiao, Yongle Zhang, Dayeon Ki, Calvin Bao, Marianna Martindale, Charlotte Vaughn, Ge Gao, Marine Carpuat",
    venue: "EMNLP",
    image: trustinmt,
    summary:
      "We study user perception, reliance and trust in machine translation when encountering different translation errors, and how their responses vary depending on their source language proficiency.",
    paper: "https://aclanthology.org/2025.emnlp-main.1725/",
    year: 2025,
    oral: "",
    workshop: "",
    tags: ["hci", "mt"],
  },
  {
    title: "GraphicBench: A Planning Benchmark for Graphic Design Generation with Language Agents",
    author:
      "Dayeon Ki, Tianyi Zhou, Marine Carpuat, Gang Wu, Puneet Mathur, Viswanathan Swaminathan",
    venue: "Preprint",
    image: graphicbench,
    summary:
      "We introduce GraphicBench, a new planning benchmark for graphic design generation with large language model agents.",
    paper: "https://arxiv.org/abs/2504.11571",
    code: "https://github.com/dayeonki/graphicbench",
    year: 2025,
    oral: "",
    workshop: "",
    tags: ["misc"],
  },
  {
    title: "AskQE: Question Answering as Automatic Evaluation for Machine Translation",
    author:
      "Dayeon Ki, Kevin Duh, Marine Carpuat",
    venue: "ACL Findings",
    image: askqe,
    summary:
      "We propose AskQE, a question generation and answering framework designed to detect critical machine translation errors and provide actionable feedback, helping people to decide whether to accept or reject translation.",
    paper: "https://arxiv.org/abs/2504.11582",
    code: "https://github.com/dayeonki/askqe",
    year: 2025,
    oral: "",
    workshop: "",
    tags: ["multi", "mt"],
  },
  {
    title: "Multiple LLM Agents Debate for Equitable Cultural Alignment",
    author:
      "Dayeon Ki, Rachel Rudinger, Tianyi Zhou, Marine Carpuat",
    venue: "ACL",
    image: culturedebate,
    summary:
      "We present a Multi-Agent Debate framework to improve equitable cultural alignment in large language models.",
    paper: "https://aclanthology.org/2025.acl-long.1210/",
    code: "https://github.com/dayeonki/cultural_debate",
    year: 2025,
    oral: "[Oral]",
    workshop: "",
    tags: ["multi", "culture"],
  },
  {
    title:
      "Automatic Rewriting Improves Translation with Large Language Models",
    author:
      "Dayeon Ki, Marine Carpuat",
    venue: "NAACL",
    image: rewrite,
    summary:
      "We conduct an empirical study on the effectiveness of automatic input rewriting for machine translation with large language models.",
    paper: "https://aclanthology.org/2025.naacl-long.542/",
    code: "https://github.com/dayeonki/rewrite_mt",
    year: 2025,
    oral: "",
    workshop: "",
    tags: ["multi", "mt"],
  },
  {
    title: "Mitigating Semantic Leakage in Cross-lingual Embeddings via Orthogonality Constraint",
    author:
      "Dayeon Ki, Cheonbok Park, Hyunjoong Kim",
    venue: "ACL RepL4NLP Workshop",
    image: oracle,
    summary:
      "We design a new training objective, ORACLE (Orthogonality Constraint Learning), tailored to enforce orthogonality between semantic and language embeddings.",
    paper: "https://aclanthology.org/2024.repl4nlp-1.19/",
    code: "https://github.com/dayeonki/oracle",
    year: 2024,
    oral: "",
    workshop: "",
    tags: ["multi", "misc"],
  },
  {
    title: "Guiding Large Language Models to Post-Edit Machine Translation with Error Annotations",
    author: "Dayeon Ki, Marine Carpuat",
    venue: "NAACL Findings",
    image: guiding,
    summary:
      "We study prompting methods to post-edit machine translation using feedback of different granularity levels.",
    paper: "https://aclanthology.org/2024.findings-naacl.265/",
    code: "https://github.com/dayeonki/mt_feedback",
    year: 2024,
    oral: "",
    workshop: "",
    tags: ["multi", "mt"],
  },
  {
    title:
      "The Prompt Report: A Systematic Survey of Prompting Techniques",
    author: "Sander Schulhoff et al.",
    venue: "Preprint",
    image: promptreport,
    summary:
      "We assemble a taxonomy of prompting techniques and analyze their use in diverse areas including multilingual, multimodal etc.",
    paper: "https://arxiv.org/abs/2406.06608",
    year: 2024,
    oral: "",
    workshop: "",
    tags: ["multi", "misc"],
  },
  {
    title:
      "Cross-lingual QA: A Key to Unlocking In-context Cross-lingual Performance",
    author: "Sunkyoung Kim*, Dayeon Ki*, Yireun Kim, Jinsik Lee",
    venue: "ICML ICL Workshop",
    image: crosslingualQA,
    summary:
      "We introduce a cross-lingual prompting method that translates only the question and answer parts to effectively stimulate models to elicit their cross-lingual knowledge.",
    paper: "https://arxiv.org/abs/2305.15233",
    year: 2024,
    oral: "",
    workshop: "",
    tags: ["multi", "mt"],
  },
  {
    title:
      "Towards Accurate Translation via Semantically Appropriate Application of Lexical Constraints",
    author: "Yujin Baek*, Koanho Lee*, Dayeon Ki, Hyoung-Gu Less, Cheonbok Park, Jaegul Choo",
    venue: "ACL Findings",
    image: constraint,
    summary:
      "We present a homograph disambiguation module to cope with unseen lexical constraints from pre-trained language models.",
    paper: "https://aclanthology.org/2023.findings-acl.298/",
    year: 2023,
    oral: "",
    workshop: "",
    tags: ["mt"],
  },
];

// sort publications by year
pubs.sort((a, b) => b.year - a.year);

export const publications = pubs;
