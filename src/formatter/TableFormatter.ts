import type { ParsedCron } from "../types/ParsedCron";

export class TableFormatter {
  private readonly FIELD_WIDTH = 14;

  format(parsedCron: ParsedCron): string {
    const lines = [
      this.formatLine("minute", parsedCron.minute),
      this.formatLine("hour", parsedCron.hour),
      this.formatLine("day of month", parsedCron.dayOfMonth),
      this.formatLine("month", parsedCron.month),
      this.formatLine("day of week", parsedCron.dayOfWeek),
      this.formatLine("command", [parsedCron.command]),
    ];

    return lines.join("\n");
  }

  private formatLine(fieldName: string, values: (number | string)[]): string {
    if (fieldName === "command") {
      return `${fieldName.padEnd(this.FIELD_WIDTH)}${values[0]}`;
    }

    const formattedValues = values.join(" ");
    return `${fieldName.padEnd(this.FIELD_WIDTH)}${formattedValues}`;
  }
}
