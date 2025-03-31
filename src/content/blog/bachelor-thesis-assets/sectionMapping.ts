import { SectionMap } from "@/components/paper/SectionMap";

const headers = {
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
    "Discussion on discreet models": {},
    "Find other metrics": {},
    "Other fields of research": {},
  },
  Conclusion: {},
  "Responsible research": {},
};

const tables = ["Algorithm speed", "Iteration speed"];
const figures = [
  "new marker dist",
  "views",
  "states",
  "order-beta",
  "final-order-beta-example",
  "critical beta vs mass",
  "critical beta vs ratio example",
  "critical beta vs ratio",
];
const equations = [
  "marker distribution 2d",
  "agent movement 2D",
  "order parameter 2d",
  "neighbours general",
  "marker distribution general",
  "agent movement 3D",
  "order param 3d",
];
const programs = ["Update universe serial", "Update universe parallel"];

class BSTSectionMap extends SectionMap {
  constructor() {
    const map = {
      headers,
      tables,
      figures,
      programs,
      equations,
    };
    super(map);
  }

  getHeaders() {
    return headers;
  }
}

export const map = new BSTSectionMap();
