export type RefType =
  | "Section"
  | "Subsection"
  | "Subsubsection"
  | "Table"
  | "Figure"
  | "Code"
  | "Equation";
  
export class SectionMap {
  sections: Map<string, number[]>;
  subsections: Map<string, number[]>;
  subsubsections: Map<string, number[]>;

  static sanitizeLabel(key: string) {
    return key.replaceAll(/\s/g, "-").toLowerCase();
  }

  constructor(map: Record<string, Record<string, Record<string, object>>>) {
    this.sections = new Map();
    this.subsections = new Map();
    this.subsubsections = new Map();

    const keys = Object.keys(map) as (keyof typeof map)[];
    for (let i = 0; i < keys.length; i++) {
      type SectionKey = keyof typeof map;
      const key = keys[i] as SectionKey;
      const subKeys = Object.keys(map[key]) as string[];

      this.sections.set(SectionMap.sanitizeLabel(key), [i + 1]);

      for (let j = 0; j < subKeys.length; j++) {
        const subKey = subKeys[j];
        this.subsections.set(SectionMap.sanitizeLabel(subKey), [i + 1, j + 1]);
        const subsubKeys = Object.keys(map[key][subKey]) as string[];

        for (let k = 0; k < subsubKeys.length; k++) {
          const subsubKey = subsubKeys[k];
          this.subsubsections.set(SectionMap.sanitizeLabel(subsubKey), [
            i + 1,
            j + 1,
            k + 1,
          ]);
        }
      }
    }
  }

  // Return the number of the section given a label
  // Subsection should return the number of the parent section
  // getSection("Method") ==> 2
  // getSection("Initialisation") ==> 2.2.1
  getSection(label: string, obj: object = this.sections) {
    label = SectionMap.sanitizeLabel(label);

    if (this.sections.has(label)) {
      return { index: this.sections.get(label)!, type: "Section" };
    } else if (this.subsections.has(label)) {
      return { index: this.subsections.get(label)!, type: "Subsection" };
    } else if (this.subsubsections.has(label)) {
      return { index: this.subsubsections.get(label)!, type: "Subsubsection" };
    }

    return { index: [], type: "Unknown" };
  }

  getSectionStr(label: string, type?: RefType) {
    const section = this.getSection(label);
    if (section.type === "Unknown") {
      return "??";
    }

    if (type && type !== section.type) {
      throw new Error(
        `Expected type ${type} but got ${section.type} for label ${label}`,
      );
    }

    return section.index.join(".");
  }
}
