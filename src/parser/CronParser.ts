import type { FieldParser } from "./FieldParser"
import { MinuteParser } from "./fields/MinuteParser"
import { HourParser } from "./fields/HourParser"
import { DayOfMonthParser } from "./fields/DayOfMonthParser"
import { MonthParser } from "./fields/MonthParser"
import { DayOfWeekParser } from "./fields/DayOfWeekParser"
import type { ParsedCron } from "../types/ParsedCron"

export class CronParser {
  private fieldParsers: FieldParser[]

  constructor() {
    this.fieldParsers = [
      new MinuteParser(),
      new HourParser(),
      new DayOfMonthParser(),
      new MonthParser(),
      new DayOfWeekParser(),
    ];
  }

  parse(cronExpression: string): ParsedCron {
    const parts = cronExpression.trim().split(/\s+/);

    if (parts.length < 6) {
      throw new Error("Invalid cron expression: must contain 5 time fields and a command");
    }

    const timeFields = parts.slice(0, 5);
    const command = parts.slice(5).join(" ");

    const result: ParsedCron = {
      minute: [],
      hour: [],
      dayOfMonth: [],
      month: [],
      dayOfWeek: [],
      command,
    };

    this.fieldParsers.forEach((parser, index) => {
      const fieldName = parser.getFieldName() as keyof Omit<ParsedCron, "command">;
      result[fieldName] = parser.parse(timeFields[index]);
    });

    return result;
  }
}
