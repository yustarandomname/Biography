import { SvelteMap } from "svelte/reactivity";

export type Paper = {
  id: string;
  title: string;
};

class Refs {
  papers = new SvelteMap<string, Paper>();

  clear() {
    this.papers.clear();
  }

  addPaper(paper: Paper) {
    this.papers.set(paper.id, paper);
  }
}

export const refState = new Refs();
