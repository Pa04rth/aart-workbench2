"use client";

import React, { useState, useEffect } from "react";
import { Scenario } from "@/lib/types";
import ScenarioList from "@/app/components/ScenarioList";
import ReportView from "@/app/components/ReportView";
import ApiKeyInput from "@/app/components/ApiKeyInput";
import HowToConnect from "@/app/components/HowToConnect";
import { runLiveTest } from "@/lib/api";

export default function WorkbenchPage() {
  const [mode, setMode] = useState<"demo" | "live">("demo");
  const [allScenarios, setAllScenarios] = useState<Scenario[]>([]);
  const [currentReport, setCurrentReport] = useState<Scenario | null>(null);
  const [agentUrl, setAgentUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showHowTo, setShowHowTo] = useState<boolean>(false);

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        const scenarioFiles = Array.from(
          { length: 12 },
          (_, i) =>
            `${String(i + 1).padStart(2, "0")}-${
              allScenarios[i] || "temp"
            }.json`
        );
        // A temporary list of filenames based on your JSON structure
        const scenarioFilenames = [
          "01-control-hijacking.json",
          "02-checker-out-of-loop.json",
          "03-agent-critical-system-interaction.json",
          "04-goal-and-instruction-manipulation.json",
          "05-agent-hallucination-exploitation.json",
          "06-agent-impact-chain-and-blast-radius.json",
          "07-agent-knowledge-base-poisoning.json",
          "08-agent-memory-and-context-manipulation.json",
          "09-multi-agent-exploitation.json",
          "10-resource-and-service-exhaustion.json",
          "11-agent-supply-chain-and-dependency-attacks.json",
          "12-agent-untraceability.json",
        ];

        const scenariosData = await Promise.all(
          scenarioFilenames.map((file) =>
            fetch(`/scenarios/${file}`).then((res) => res.json())
          )
        );
        setAllScenarios(scenariosData);
      } catch (e) {
        setError(
          "Failed to load scenario files. Please check the /public/scenarios directory."
        );
        console.error(e);
      }
    };

    fetchScenarios();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScenarioSelect = async (scenario: Scenario) => {
    setError(null);

    if (mode === "demo") {
      setCurrentReport(scenario);
    } else {
      if (!agentUrl) {
        setError("Please enter your agent's endpoint URL first.");
        return;
      }
      setIsLoading(true);
      setCurrentReport(null);
      try {
        const liveReport = await runLiveTest(agentUrl, scenario);
        setCurrentReport(liveReport);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(`Live test failed: ${e.message}`);
        } else {
          setError("An unknown error occurred during the live test.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="flex h-screen bg-gray-900 text-white font-sans">
      <div className="flex flex-col w-1/3 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">AART Workbench</h1>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => setMode("demo")}
              className={`px-4 py-2 rounded-md text-sm font-bold ${
                mode === "demo"
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Demo Mode
            </button>
            <button
              onClick={() => setMode("live")}
              className={`px-4 py-2 rounded-md text-sm font-bold ${
                mode === "live"
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Live Test
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          <ScenarioList
            scenarios={allScenarios}
            onScenarioSelect={handleScenarioSelect}
            isLoading={isLoading}
            activeScenarioName={currentReport?.test_name || null}
          />
        </div>

        {mode === "live" && (
          <div>
            <ApiKeyInput
              url={agentUrl}
              setUrl={setAgentUrl}
              onConnect={() => handleScenarioSelect(allScenarios[0])}
              isLoading={isLoading}
            />
            <div className="p-4">
              <button
                onClick={() => setShowHowTo(!showHowTo)}
                className="text-blue-400 hover:underline text-sm"
              >
                {showHowTo ? "Hide connection guide" : "Show connection guide"}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-2/3 flex flex-col">
        {mode === "live" && showHowTo && <HowToConnect />}

        {error && (
          <div className="p-4 bg-red-800 text-white m-4 rounded-md">
            {error}
          </div>
        )}

        <div className="flex-grow">
          <ReportView report={currentReport} />
        </div>
      </div>
    </main>
  );
}