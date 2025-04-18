"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFormatter = void 0;
class TableFormatter {
    constructor() {
        this.FIELD_WIDTH = 14;
    }
    format(parsedCron) {
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
    formatLine(fieldName, values) {
        if (fieldName === "command") {
            return `${fieldName.padEnd(this.FIELD_WIDTH)}${values[0]}`;
        }
        const formattedValues = values.join(" ");
        return `${fieldName.padEnd(this.FIELD_WIDTH)}${formattedValues}`;
    }
}
exports.TableFormatter = TableFormatter;
