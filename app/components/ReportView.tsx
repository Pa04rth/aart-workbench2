"use client";
import { Scenario } from "@/lib/types";
import { TranscriptItem } from "./TranscriptItem";

interface ReportViewProps {
  report: Scenario | null;
}

export const ReportView: React.FC<ReportViewProps> = ({ report }) => {
  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <div className="text-3xl font-bold">
          <h2>Welcome to AART Workbench</h2>
        </div>
        <div className="mt-4 text-center max-w-md">
          <p className="mt-2">
            Select a threat scenario from the left to view the report.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-2">{report.test_name}</h2>
      <p className="mb-1">
        <strong>Threat Category:</strong> {report.threat_category}
      </p>
      <p className="mb-4">
        <strong>Verdict:</strong>{" "}
        <span
          className={
            report.verdict === "pass" ? "text-green-400" : "text-red-400"
          }
        >
          {report.verdict.toUpperCase()}
        </span>
      </p>
      <div className="mb-4 p-4 bg-gray-800 rounded">
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <p>{report.summary}</p>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-800 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Transcript</h3>
        <div className="space-y-2">
          {report.transcript.map((item, index) => (
            <TranscriptItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
