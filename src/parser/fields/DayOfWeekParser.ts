import { FieldParser } from "../FieldParser";

export class DayOfWeekParser extends FieldParser {
  constructor() {
    super("dayOfWeek", 0, 6);
  }
}
