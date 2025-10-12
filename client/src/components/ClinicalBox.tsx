import { AlertCircle } from "lucide-react";

interface ClinicalBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function ClinicalBox({ title = "Clinical Relevance", children }: ClinicalBoxProps) {
  return (
    <div className="border-l-4 border-l-chart-2 bg-chart-2/5 p-4 rounded-r-md my-6" data-testid="clinical-box">
      <div className="flex items-center gap-2 mb-2">
        <AlertCircle className="h-5 w-5 text-chart-2" />
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <div className="text-sm text-foreground/90">{children}</div>
    </div>
  );
}
