"use client";

import React from "react";

export const HowToConnect: React.FC = () => {
  const fastapiCode = `
# server.py
# Make sure to install the necessary libraries:
# pip install fastapi uvicorn langchain openai

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
# This is where you would import YOUR agent and tools
# from langchain.agents import AgentExecutor, initialize_agent, ...

# --- THIS IS A PLACEHOLDER ---
# Replace this with the actual initialization of your LangChain agent.
# It needs to be an object with an .invoke() method.
# For demonstration, we're creating a dummy agent.
class DummyAgent:
    def invoke(self, data):
        print(f"Agent received input: {data['input']}")
        return {"output": f"This is a dummy response to: {data['input']}"}
my_agent = DummyAgent()
# --- END OF PLACEHOLDER ---

app = FastAPI(
    title="AART Workbench Agent Server",
    description="An example server to connect a local agent to the AART Workbench.",
)

# This defines the expected structure of the incoming request body.
class InvokeRequest(BaseModel):
    input: str

@app.post("/invoke")
async def invoke_agent(request: InvokeRequest):
    """
    This endpoint receives a prompt and returns the agent's response.
    The AART Workbench will send requests to this endpoint.
    """
    try:
        # This is where you run your agent. The .invoke() method is standard in LangChain.
        response = my_agent.invoke({"input": request.input})
        return {"output": response}
    except Exception as e:
        # If something goes wrong with your agent, return a server error.
        raise HTTPException(status_code=500, detail=str(e))

# To run this server, save it as server.py and run in your terminal:
# uvicorn server:app --reload
  `;

  return (
    <div className="p-4 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 my-4">
      <h2 className="text-xl font-bold text-white mb-3">
        How to Connect Your Live Agent
      </h2>

      <p className="mb-4">
        This tool tests your agent by sending prompts to a public URL. Your
        agent code and API keys stay securely on your own computer. Follow these
        two steps to get connected.
      </p>

      {/* Section 2: The Python Server Guide */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          Step 1: Create Your Agent Endpoint
        </h3>
        <p className="mb-2">
          The following Python script uses FastAPI to create a simple web server
          that exposes your agent. Save this as{" "}
          <code className="bg-gray-700 px-1 rounded">server.py</code>.
        </p>
        <pre className="bg-gray-900 p-4 rounded-md text-sm text-white overflow-x-auto">
          <code>{fastapiCode}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Step 2: Get a Public URL with ngrok
        </h3>
        <p className="mb-2">
          Use the free{" "}
          <a
            href="https://ngrok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            ngrok
          </a>{" "}
          tool to create a secure tunnel to your local server.
        </p>
        <ol className="list-decimal list-inside space-y-2 bg-gray-900 p-4 rounded-md">
          <li>
            Install ngrok if you havent already:{" "}
            <code className="bg-gray-700 px-1 rounded">pip install ngrok</code>
          </li>
          <li>
            Run your Python server in a terminal:{" "}
            <code className="bg-gray-700 px-1 rounded">
              uvicorn server:app --reload
            </code>
          </li>
          <li>
            In a <strong>second terminal</strong>, run ngrok:{" "}
            <code className="bg-gray-700 px-1 rounded">ngrok http 8000</code>
          </li>
          <li>
            Copy the public <code>Forwarding</code> URL (it looks like{" "}
            <code className="bg-gray-700 px-1 rounded">
              https://....ngrok-free.app
            </code>
            ) and paste it into the input field to start testing!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToConnect;
