export type RefType =
  | "Section"
  | "Subsection"
  | "Subsubsection"
  | "Table"
  | "Figure"
  | "Code"
  | "Equation";

export type MapType = {
  headers: Record<string, Record<string, Record<string, object>>>;
  tables?: string[];
  figures?: string[];
  programs?: string[];
  equations?: string[];
};

export class SectionMap {
  sections: Map<string, number[]>;
  subsections: Map<string, number[]>;
  subsubsections: Map<string, number[]>;

  tables: Map<string, number[]>;
  figures: Map<string, number[]>;
  programs: Map<string, number[]>;
  equations: Map<string, number[]>;

  static sanitizeLabel(key: string) {
    return key.replaceAll(/\s/g, "-").toLowerCase();
  }

  static setupMap(values?: string[]) {
    return new Map(
      values?.map((v, i) => {
        return [SectionMap.sanitizeLabel(v), [i + 1]];
      }),
    );
  }

  constructor(map: MapType) {
    this.sections = new Map();
    this.subsections = new Map();
    this.subsubsections = new Map();

    // Setup headers
    const keys = Object.keys(map.headers) as (keyof typeof map)[];
    for (let i = 0; i < keys.length; i++) {
      type SectionKey = keyof typeof map;
      const key = keys[i] as SectionKey;
      const subKeys = Object.keys(map.headers[key]) as string[];

      this.sections.set(SectionMap.sanitizeLabel(key), [i + 1]);

      for (let j = 0; j < subKeys.length; j++) {
        const subKey = subKeys[j];
        this.subsections.set(SectionMap.sanitizeLabel(subKey), [i + 1, j + 1]);
        const subsubKeys = Object.keys(map.headers[key][subKey]) as string[];

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

    // Setup tables, figures, programs and equations
    this.tables = SectionMap.setupMap(map.tables);
    this.figures = SectionMap.setupMap(map.figures);
    this.programs = SectionMap.setupMap(map.programs);
    this.equations = SectionMap.setupMap(map.equations);
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

  getLabelByType(label: string, type: RefType, throws = true) {
    label = SectionMap.sanitizeLabel(label);

    switch (type) {
      case "Section":
        return this.sections.get(label) ?? [];
      case "Subsection":
        return this.subsections.get(label) ?? [];
      case "Subsubsection":
        return this.subsubsections.get(label) ?? [];
      case "Table":
        return this.tables.get(label) ?? [];
      case "Figure":
        return this.figures.get(label) ?? [];
      case "Code":
        return this.programs.get(label) ?? [];
      case "Equation":
        return this.equations.get(label) ?? [];
      default:
        if (throws) throw new Error(`Unknown label ${label} for ${type}`);
        else return [];
    }
  }

  getLabel(label: string) {
    label = SectionMap.sanitizeLabel(label);

    const section = this.getSection(label);
    if (section.type !== "Unknown") {
      return section;
    }

    for (const type of ["Table", "Figure", "Code", "Equation"]) {
      const result = this.getLabelByType(label, type as RefType, false);
      if (result.length > 0) {
        return { index: result, type };
      }
    }

    return { index: [], type: "Unknown" };
  }
}
