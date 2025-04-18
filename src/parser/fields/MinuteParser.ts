import { FieldParser } from "../FieldParser";

export class MinuteParser extends FieldParser {
  constructor() {
    super("minute", 0, 59);
  }
}
