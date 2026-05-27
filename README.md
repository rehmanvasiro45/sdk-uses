# sdk-uses

Examples using the [Claude Agent SDK](https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk).

## Example

`index.mjs` runs a Claude agent that lists files in the current directory, responding in bullet points.

## Setup

```bash
npm install
```

Set your Anthropic API key:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

## Run

```bash
node index.mjs
```

## Output

The script prints the agent's response followed by token usage from the `result` message:

```
- index.mjs
- package.json
- README.md
Tokens used: { input_tokens: 412, output_tokens: 18, cache_read_input_tokens: 0, cache_creation_input_tokens: 0 }
```
