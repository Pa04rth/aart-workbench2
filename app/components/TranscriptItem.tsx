"use client";
import { TranscriptItem as TranscriptItemType } from "@/lib/types";
import { useState, useEffect } from "react";

interface TranscriptItemProps {
  item: TranscriptItemType;
}

export const TranscriptItem: React.FC<TranscriptItemProps> = ({ item }) => {
  const isUser = item.speaker === "user";
  const isAgent = item.speaker === "agent";
  const isSystem = item.speaker === "system";
  const [displayedText, setDisplayedText] = useState(
    isAgent ? "" : typeof item.content === "string" ? item.content : ""
  );

  useEffect(() => {
    if (isAgent && typeof item.content == "string") {
      setDisplayedText("");
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayedText(
          (item.content as string).substring(0, currentIndex + 1)
        );
        currentIndex++;
        if (currentIndex >= (item.content as string).length) {
          clearInterval(interval);
        }
      }, 20); // typing speed

      return () => clearInterval(interval);
    }
  }, [item, isAgent]);

  return (
    <div
      className={`
        my-2 p-3 rounded-lg max-w-[80%] flex flex-col
        ${isUser ? "bg-gray-700 text-white self-start" : ""}
        ${isAgent ? "bg-blue-600 text-white self-end" : ""}
        ${
          isSystem
            ? "bg-red-900/50 border border-red-700 text-white self-center w-full"
            : ""
        }
      `}
    >
      {isSystem && typeof item.content !== "string" ? (
        <div>
          <strong className="font-mono text-red-400">[SYSTEM TOOL CALL]</strong>
          <pre className="bg-gray-900 p-2 rounded mt-1 text-sm whitespace-pre-wrap">
            <strong>Tool:</strong> {item.content.tool}
            {"\n"}
            <strong>Args:</strong> {JSON.stringify(item.content.args, null, 2)}
          </pre>
        </div>
      ) : (
        // For user and agent messages
        <p>{displayedText}</p>
      )}
    </div>
  );
};
