"use client";

import React from "react";

interface ApiKeyInputProps {
  url: string;
  setUrl: (url: string) => void;
  onConnect: () => void;
  isLoading: boolean;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({
  url,
  setUrl,
  onConnect,
  isLoading,
}) => {
  return (
    <div className="p-4 bg-gray-900 border-t border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-2">Live Test Mode</h3>

      <input
        type="url"
        placeholder="https://yourendpoint.ngrok.io/invoke"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={isLoading}
        className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      />

      <p className="text-xs text-gray-400 mt-2">
        Your endpoint URL is used only in your browser and is never sent to our
        servers.
      </p>
      <button
        onClick={onConnect} // When clicked, call the 'onConnect' function.
        disabled={isLoading || !url}
        className="w-full mt-3 p-2 rounded-md bg-blue-600 text-white font-bold transition-colors hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        {isLoading ? "Running Test..." : "Run Live Test"}
      </button>
    </div>
  );
};

export default ApiKeyInput;
