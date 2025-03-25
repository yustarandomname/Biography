import { SvelteMap } from "svelte/reactivity";

type Base = {
  ID: string;
  author: string;
  authors: string[];
  abstract?: string;
  title: string;
  url?: string;
  doi?: string;
  year: string;
  month?: string;
};

interface ResearachPaper extends Base {
  ENTRYTYPE: "researchpaper";
  title: string;
}

interface TechReport extends Base {
  ENTRYTYPE: "techreport";
  institution: string;
  type: string;
  bibsource: string;
}

interface Journal extends Base {
  ENTRYTYPE: "journal" | "inproceedings" | "article";
  issn?: string;
  isbn?: string;
  journal: string;
  pages?: string;
  volume?: string;
  number?: string;
  issue?: string;
  eprint?: string;
  editor?: string;
}

interface Book extends Base {
  ENTRYTYPE: "book";
  keywords?: string;
  note?: string;
  publisher: string;
  language?: string;
  pages?: `${number}-${number}`;
  volume?: `${number}`;
}

interface WebPage extends Base {
  ENTRYTYPE: "webpage";
  author: string;
  authors: string[];
  url: string;
  title: string;
  year: string;
  month?: string;
  journal?: string;
}

export type Paper = ResearachPaper | Journal | Book | WebPage;

class Refs {
  papers = new SvelteMap<string, Paper>();

  clear() {
    this.papers.clear();
  }

  addPaper(paper: Paper) {
    this.papers.set(paper.ID, paper);
  }
}

export const refState = new Refs();
