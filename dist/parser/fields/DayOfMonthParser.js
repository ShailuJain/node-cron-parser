"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfMonthParser = void 0;
const FieldParser_1 = require("../FieldParser");
class DayOfMonthParser extends FieldParser_1.FieldParser {
    constructor() {
        super("dayOfMonth", 1, 31);
    }
}
exports.DayOfMonthParser = DayOfMonthParser;
