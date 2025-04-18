"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinuteParser = void 0;
const FieldParser_1 = require("../FieldParser");
class MinuteParser extends FieldParser_1.FieldParser {
    constructor() {
        super("minute", 0, 59);
    }
}
exports.MinuteParser = MinuteParser;
