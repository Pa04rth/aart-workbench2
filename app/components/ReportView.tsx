"use client";

// The import was likely correct if you used 'export const' in TranscriptItem.tsx
import { TranscriptItem } from "./TranscriptItem";
import { Scenario } from "@/lib/types";

interface ReportViewProps {
  report: Scenario | null;
}

const ReportView: React.FC<ReportViewProps> = ({ report }) => {
  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 p-4">
        <h2 className="text-2xl font-bold">Welcome to the AART Workbench</h2>
        <p className="mt-2">
          Select a threat scenario from the left to view the report.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4 bg-gray-900 overflow-y-auto">
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-white">{report.test_name}</h2>
        <p className="text-sm text-gray-400">{report.threat_category}</p>
        <div className="mt-2">
          <span
            className={`
              px-3 py-1 text-sm font-bold rounded-full text-white
              ${report.verdict === "pass" ? "bg-green-600" : "bg-red-600"}
            `}
          >
            VERDICT: {report.verdict.toUpperCase()}
          </span>
        </div>
        <p className="mt-3 text-gray-300">{report.summary}</p>
      </div>

      {/* Transcript Section */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2">Transcript</h3>
        <div className="flex flex-col">
          {report.transcript.map((item, index) => (
            <TranscriptItem key={`${report.test_name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportView;
