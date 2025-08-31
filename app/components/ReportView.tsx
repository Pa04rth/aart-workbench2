// File: app/components/ReportView.tsx

"use client";

import { Scenario } from "@/lib/types";
import TranscriptItem from "./TranscriptItem";

// *** THE FIX IS HERE ***
// Step 1: We update the "contract" (the props interface) for this component.
// We are adding 'isLoading' to the list of allowed props.
interface ReportViewProps {
  report: Scenario | null;
  isLoading: boolean; // This line was missing.
}

const ReportView: React.FC<ReportViewProps> = ({ report, isLoading }) => {
  // Step 2: Now that 'isLoading' is a valid prop, we can use it to show a loading state.
  // This is a great user experience improvement.
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4">Running live test...</p>
      </div>
    );
  }

  // The rest of your code was already perfect.
  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 p-4 text-center">
        <h2 className="text-2xl font-bold">Welcome to the AART Workbench</h2>
        <p className="mt-2 max-w-md">
          Select a threat scenario from the left to view a pre-recorded demo, or
          switch to Live Test mode to test your own agent.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4 overflow-y-auto">
      <div className="border-b border-gray-800 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-white">{report.test_name}</h2>
        <p className="text-sm text-gray-400">{report.threat_category}</p>
        <div className="mt-2">
          <span
            className={`px-3 py-1 text-sm font-bold rounded-full text-white ${
              report.verdict === "pass" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            VERDICT: {report.verdict.toUpperCase()}
          </span>
        </div>
        <p className="mt-3 text-gray-300">{report.summary}</p>
      </div>
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
