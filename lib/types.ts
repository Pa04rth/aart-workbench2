type TranscriptItem = {
  speaker: "user" | "agent" | "system";
  content: string | { tool: string; args: Record<string, unknown> }; //content can be a string or an obj with tool=name and args =arguments
};

type Scenario = {
  test_name: string;
  transcript: TranscriptItem[];
  threat_category: string;
  verdict: "pass" | "fail";
  summary: string;
};

export type { TranscriptItem, Scenario };
