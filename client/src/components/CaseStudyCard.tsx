import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm h-full">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={caseStudy.image}
          alt={caseStudy.name}
          className="w-14 h-14 rounded-full object-cover border border-slate-200"
        />
        <div>
          <p className="font-semibold text-slate-900 leading-tight">{caseStudy.name}</p>
          <p className="text-sm text-slate-600">{caseStudy.role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < caseStudy.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
            }`}
          />
        ))}
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">{caseStudy.summary}</p>

      <ul className="space-y-2.5">
        {caseStudy.results.map((result) => (
          <li key={result} className="text-sm text-slate-700 flex items-start">
            <span className="mr-2 text-slate-500">•</span>
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
