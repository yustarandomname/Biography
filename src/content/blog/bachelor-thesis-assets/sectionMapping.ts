import { SectionMap } from "@/components/paper/SectionMap";

const sections = {
  Introduction: {},
  "Background and related work": {
    "Taking a drunkard walk": {},
    "Higher-dimensional walks": {},
    "Human gang territories": {},
  },
  Method: {
    "A generalised random walker model": {},
    "A naive model": {
      Initialisation: {},
      Iteration: {},
    },
    "CPU improvements": {},
    "GPU improvements": {},
    Visualisations: {},
    "3D order parameter": {},
  },
  Results: {
    "Compare algorithm speed": {},
    "Comparing phase transitions between papers": {
      "Well-mixed, well-segregated and partial-segregated states": {},
      "Comparing mass parameters": {},
      "Comparing lambda/gamma parameters": {},
    },
  },
  "Argumentation and discussion": {
    "Discuss results": {
      "Three-dimensional lattice phase states": {},
      "Contrast and similarities between models": {},
    },
    "Discussion on discrete models": {},
    "Find other metrics": {},
    "Other fields of research": {},
  },
  Conclusion: {},
  "Responsible research": {},
};

class BSTSectionMap extends SectionMap {

  constructor() {
    super(sections)
  }

  getSections() {
    return this.sections;
  }

 
}

export const map = new BSTSectionMap();
