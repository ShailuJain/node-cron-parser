"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthParser = void 0;
const FieldParser_1 = require("../FieldParser");
class MonthParser extends FieldParser_1.FieldParser {
    constructor() {
        super("month", 1, 12);
    }
}
exports.MonthParser = MonthParser;
