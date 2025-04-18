# Cron Expression Parser

A command-line application that parses a cron string and expands each field to show the times at which it will run.

## Installation

### Prerequisites

- Node.js
- npm

### Setup

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Build the project:
   \`\`\`
   npm run build
   \`\`\`

## Usage

Run the application with a cron expression as an argument:

\`\`\`
node dist/index.js "*/15 0 1,15 * 1-5 /test_command args"
\`\`\`

Example output:

\`\`\`
minute        0 15 30 45
hour          0
day of month  1 15
month         1 2 3 4 5 6 7 8 9 10 11 12
day of week   1 2 3 4 5
command       /test_command args
\`\`\`

## Running Tests

Run the test suite with:

\`\`\`
npm test
\`\`\`
