"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronParser = void 0;
const MinuteParser_1 = require("./fields/MinuteParser");
const HourParser_1 = require("./fields/HourParser");
const DayOfMonthParser_1 = require("./fields/DayOfMonthParser");
const MonthParser_1 = require("./fields/MonthParser");
const DayOfWeekParser_1 = require("./fields/DayOfWeekParser");
class CronParser {
    constructor() {
        this.fieldParsers = [
            new MinuteParser_1.MinuteParser(),
            new HourParser_1.HourParser(),
            new DayOfMonthParser_1.DayOfMonthParser(),
            new MonthParser_1.MonthParser(),
            new DayOfWeekParser_1.DayOfWeekParser(),
        ];
    }
    parse(cronExpression) {
        const parts = cronExpression.trim().split(/\s+/);
        if (parts.length < 6) {
            throw new Error("Invalid cron expression: must contain 5 time fields and a command");
        }
        const timeFields = parts.slice(0, 5);
        const command = parts.slice(5).join(" ");
        const result = {
            minute: [],
            hour: [],
            dayOfMonth: [],
            month: [],
            dayOfWeek: [],
            command,
        };
        this.fieldParsers.forEach((parser, index) => {
            const fieldName = parser.getFieldName();
            result[fieldName] = parser.parse(timeFields[index]);
        });
        return result;
    }
}
exports.CronParser = CronParser;
