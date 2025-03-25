import type { Paper } from "@/components/svelte/bib/BibState.svelte";

export const papers = {
  paperOne: {
    id: "paperOne",
    title: "Paper 1",
  },
  paperTwo: {
    id: "paperTwo",
    title: "Paper 2",
  },
} as const satisfies { [key: string]: Paper };
