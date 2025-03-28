import { SvelteMap } from "svelte/reactivity";

export type RefType =
  | "Section"
  | "Subsection"
  | "Subsubsection"
  | "Table"
  | "Figure"
  | "Code"
  | "Equation";

class Refs {
  sections: number = $state(0);
  subsections: number = $state(0);
  subsubsections: number = $state(0);

  tables: number = $state(0);
  figures: number = $state(0);
  codes: number = $state(0);
  equations: number = $state(0);

  refStore = new SvelteMap<string, number>();
  #typeStore = new SvelteMap<string, RefType>();

  clear() {
    this.sections = 0;
    this.subsections = 0;

    this.tables = 0;
    this.figures = 0;
    this.codes = 0;
    this.equations = 0;

    this.refStore.clear();
    this.#typeStore.clear();
  }

  addItem(label: string, type: RefType) {
    if (this.#typeStore.has(label)) {
      throw new Error(`Duplicate label: ${label}`);
    }

    this.#typeStore.set(label, type);

    switch (type) {
      case "Section":
        this.sections++;
        this.subsections = 0;
        this.subsubsections = 0;
        this.refStore.set(label, this.sections);
        break;
      case "Subsection":
        this.subsections++;
        this.subsubsections = 0;
        this.refStore.set(label, this.subsections);
        break;
      case "Subsubsection":
        this.subsubsections++;
        this.refStore.set(label, this.subsubsections);
        break;
      case "Table":
        this.tables++;
        this.refStore.set(label, this.tables);
        break;
      case "Figure":
        this.figures++;
        this.refStore.set(label, this.figures);
        break;
      case "Code":
        this.codes++;
        this.refStore.set(label, this.codes);
        break;
      case "Equation":
        this.equations++;
        this.refStore.set(label, this.equations);
        break;
    }
  }

  getItem(type: RefType) {
    switch (type) {
      case "Section":
        return this.sections;
      case "Subsection":
        return this.subsections;
      case "Subsubsection":
        return this.subsubsections;
      case "Table":
        return this.tables;
      case "Figure":
        return this.figures;
      case "Code":
        return this.codes;
      case "Equation":
        return this.equations;
    }
  }

  getIndex(label: string) {
    // console.log(this.#typeStore, label);

    if (!this.#typeStore.has(label)) {
      return { index: 0, type: "Section" };
    }

    const index = this.#typeStore.get(label);
    const type = this.#typeStore.get(label);

    return { index, type };
  }
}

export const refState = new Refs();
