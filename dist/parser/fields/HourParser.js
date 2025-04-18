"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourParser = void 0;
const FieldParser_1 = require("../FieldParser");
class HourParser extends FieldParser_1.FieldParser {
    constructor() {
        super("hour", 0, 23);
    }
}
exports.HourParser = HourParser;
