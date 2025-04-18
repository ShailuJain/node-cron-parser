#!/usr/bin/env node

import { CronParser } from "./parser/CronParser"
import { TableFormatter } from "./formatter/TableFormatter"

function main() {
  try {
    // Get the cron expression from command line arguments
    const cronExpression = process.argv[2];

    if (!cronExpression) {
      console.error("Error: Please provide a cron expression as an argument");
      console.error('Usage: "*/15 0 1,15 * 1-5 /usr/bin/find"');
      process.exit(1);
    }

    // Parse the cron expression
    const parser = new CronParser();
    const parsedCron = parser.parse(cronExpression);

    // Format and display the result
    const formatter = new TableFormatter();
    const output = formatter.format(parsedCron);

    console.log(output);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
}

main();
