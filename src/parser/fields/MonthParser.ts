import { FieldParser } from "../FieldParser";

export class MonthParser extends FieldParser {
  constructor() {
    super("month", 1, 12);
  }
}
