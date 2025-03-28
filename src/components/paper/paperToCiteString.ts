import type { Paper } from "@/components/svelte/bib/BibState.svelte";

function firstLetterLastname(author: string) {
  const fullname = author.split(" ");
  const containsComma = author.includes(",");

  const lastName = containsComma ? fullname[0] : fullname[fullname.length - 1];

  // If a name is a hyphenated name, return the initials of each part
  // "Alice Harry-Peterson" -> "HP"
  return lastName
    .split("-")
    .map((n) => n[0].toUpperCase())
    .join("");
}

export function toString(paper: Paper) {
  const y = paper?.year.toString().slice(-2) ?? ""; // 2024 -> 24

  if (paper.ENTRYTYPE == "webpage") {
    return paper.title + y;
  } else if (paper?.authors.length <= 4) {
    return paper.authors.map(firstLetterLastname).join("") + "" + y;
  } else {
    const firstThree =
      paper.authors.slice(0, 3).map(firstLetterLastname).join("") + "*" + y;
    return firstThree;
  }
}

export function toId(paperId: string) {
  return paperId
    .replaceAll("mst/", "")
    .replaceAll("bst/", "")
    .replaceAll(/[^a-zA-Z0-9]/g, "_")
    .toLocaleLowerCase();
}
