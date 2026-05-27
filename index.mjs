import { query } from "@anthropic-ai/claude-agent-sdk";

const prompt = "List the files in the current directory";

for await (const message of query({
  prompt,
  options: {
    systemPrompt: "You are a helpful assistant. Always respond in bullet points only. Be concise.",
    allowedTools: ["Read", "Glob"],
  },
})) {
  if (message.type === "result") {
    console.log(message.result);
    console.log("Tokens used:", message.usage);
  }
}