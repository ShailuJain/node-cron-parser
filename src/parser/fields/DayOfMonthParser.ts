import { FieldParser } from "../FieldParser"

export class DayOfMonthParser extends FieldParser {
  constructor() {
    super("dayOfMonth", 1, 31)
  }
}
