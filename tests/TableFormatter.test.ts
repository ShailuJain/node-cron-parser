import { TableFormatter } from "../src/formatter/TableFormatter";
import type { ParsedCron } from "../src/types/ParsedCron";

describe("TableFormatter", () => {
  let formatter: TableFormatter;

  beforeEach(() => {
    formatter = new TableFormatter();
  });

  test("should format a parsed cron expression correctly", () => {
    const parsedCron: ParsedCron = {
      minute: [0, 15, 30, 45],
      hour: [0],
      dayOfMonth: [1, 15],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      dayOfWeek: [1, 2, 3, 4, 5],
      command: "/usr/bin/find",
    };

    const expected =
      "minute        0 15 30 45\n" +
      "hour          0\n" +
      "day of month  1 15\n" +
      "month         1 2 3 4 5 6 7 8 9 10 11 12\n" +
      "day of week   1 2 3 4 5\n" +
      "command       /usr/bin/find";

    expect(formatter.format(parsedCron)).toBe(expected);
  });

  test("should handle commands with spaces", () => {
    const parsedCron: ParsedCron = {
      minute: [0],
      hour: [0],
      dayOfMonth: [1],
      month: [1],
      dayOfWeek: [1],
      command: '/usr/bin/find /tmp -name "*.log"',
    };

    const formatted = formatter.format(parsedCron);
    expect(formatted).toContain('command       /usr/bin/find /tmp -name "*.log"');
  });
});
