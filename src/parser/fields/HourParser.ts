import { FieldParser } from "../FieldParser";

export class HourParser extends FieldParser {
  constructor() {
    super("hour", 0, 23);
  }
}
