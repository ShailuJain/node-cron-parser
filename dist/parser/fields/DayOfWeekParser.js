"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfWeekParser = void 0;
const FieldParser_1 = require("../FieldParser");
class DayOfWeekParser extends FieldParser_1.FieldParser {
    constructor() {
        super("dayOfWeek", 0, 6);
    }
}
exports.DayOfWeekParser = DayOfWeekParser;
