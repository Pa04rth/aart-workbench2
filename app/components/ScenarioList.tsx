"use client";

import React from "react";
import { Scenario } from "@/lib/types";

interface ScenarioListProps {
  scenarios: Scenario[];
  onScenarioSelect: (scenario: Scenario) => void;
  isLoading: boolean;
  activeScenarioName: string | null;
}

const ScenarioList: React.FC<ScenarioListProps> = ({
  scenarios,
  onScenarioSelect,
  isLoading,
  activeScenarioName,
}) => {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-gray-900 border-r border-gray-700">
      <h2 className="text-lg font-bold text-white mb-2">Threat Scenarios</h2>

      {scenarios.map((scenario) => (
        <button
          key={scenario.test_name}
          onClick={() => onScenarioSelect(scenario)}
          disabled={isLoading} // The button is disabled if a test is currently running.
          className={`
            w-full p-3 text-left rounded-md transition-colors text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-gray-700
            ${
              activeScenarioName === scenario.test_name
                ? "bg-blue-600 font-semibold"
                : "bg-gray-800"
            }
          `}
        >
          {scenario.test_name}
        </button>
      ))}
    </div>
  );
};

export default ScenarioList;
