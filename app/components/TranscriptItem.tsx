// app/components/TranscriptItem.tsx

"use client";

import { TranscriptItem as TranscriptItemType } from "@/lib/types";
import { useState, useEffect } from "react";
import { User, Bot, AlertTriangle } from "lucide-react";

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
    if (isAgent && typeof item.content === "string") {
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
      }, 20);
      return () => clearInterval(interval);
    }
    if (!isAgent || typeof item.content !== "string") {
      setDisplayedText(typeof item.content === "string" ? item.content : "");
    }
  }, [item, isAgent]);

  const Icon = isUser ? User : isAgent ? Bot : AlertTriangle;
  const iconColor = isUser
    ? "text-zinc-400"
    : isAgent
    ? "text-cyan-400"
    : "text-red-500";
  const bgColor = isUser
    ? "bg-zinc-800"
    : isAgent
    ? "bg-blue-950/50"
    : "bg-red-950/50";
  const alignment = isUser
    ? "items-start"
    : isAgent
    ? "items-end"
    : "items-center";

  return (
    <div className={`w-full flex flex-col ${alignment} my-2 px-4`}>
      <div
        className={`p-4 rounded-lg flex space-x-4 ${bgColor} ${
          isSystem ? "w-full border border-red-800" : "max-w-[85%] w-fit"
        }`}
      >
        <div className="flex-shrink-0">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-grow min-w-0">
          {isSystem && typeof item.content !== "string" ? (
            <div>
              <strong className="font-mono text-red-400">
                [SYSTEM TOOL CALL]
              </strong>
              <pre className="bg-zinc-900 p-2 rounded mt-2 text-sm whitespace-pre-wrap text-zinc-300">
                <strong>Tool:</strong> {item.content.tool}
                {"\n"}
                <strong>Args:</strong>{" "}
                {JSON.stringify(item.content.args, null, 2)}
              </pre>
            </div>
          ) : (
            <p className="text-zinc-200 leading-relaxed break-words">
              {displayedText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranscriptItem;
