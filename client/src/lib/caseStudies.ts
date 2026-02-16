import rawCaseStudies from "../../../data/case-studies/case-studies.json";

export type CaseStudy = {
  id: string;
  service: "consultoria" | "automatizacion" | "desarrollo-tecnico";
  name: string;
  role: string;
  rating: number;
  summary: string;
  results: string[];
  image: string;
};

const caseStudies = rawCaseStudies as CaseStudy[];

export function getCaseStudiesByService(service: CaseStudy["service"]): CaseStudy[] {
  return caseStudies.filter((item) => item.service === service);
}
