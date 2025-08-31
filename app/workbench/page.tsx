// app/workbench/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { Scenario } from "@/lib/types";
import { Navbar } from "@/app/components/Navbar";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showHowTo, setShowHowTo] = useState<boolean>(false);

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchScenarios();
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

  const handleRunAll = () => {
    if (mode === "live" && allScenarios.length > 0) {
      handleScenarioSelect(allScenarios[0]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans">
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        {/* Left Panel */}
        <div className="flex flex-col w-[35%] max-w-md border-r border-zinc-800 bg-zinc-950">
          <div className="p-4 border-b border-zinc-800">
            <h1 className="text-xl font-bold">Workbench</h1>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => setMode("demo")}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                  mode === "demo"
                    ? "bg-cyan-400 text-black"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                }`}
              >
                Demo Mode
              </button>
              <button
                onClick={() => setMode("live")}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                  mode === "live"
                    ? "bg-cyan-400 text-black"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
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
                onConnect={handleRunAll}
                isLoading={isLoading}
              />
              <div className="p-4 text-center border-t border-zinc-800">
                <button
                  onClick={() => setShowHowTo(!showHowTo)}
                  className="text-cyan-400 hover:underline text-sm font-semibold"
                >
                  {showHowTo
                    ? "Hide Connection Guide"
                    : "Show Connection Guide"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="flex-grow flex flex-col overflow-y-hidden bg-zinc-900">
          {mode === "live" && showHowTo && (
            <div className="overflow-y-auto border-b border-zinc-800">
              <HowToConnect />
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-900/50 text-red-300 border border-red-800 m-4 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex-grow overflow-y-auto">
            <ReportView
              report={currentReport}
              isLoading={isLoading && !showHowTo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
