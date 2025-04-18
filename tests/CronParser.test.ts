import { CronParser } from "../src/parser/CronParser";
import { describe, beforeEach, test, expect } from "@jest/globals";

describe("CronParser", () => {
  let parser: CronParser;

  beforeEach(() => {
    parser = new CronParser();
  });

  test("should parse a simple cron expression", () => {
    const result = parser.parse("*/15 0 1,15 * 1-5 /test_command");

    expect(result.minute).toEqual([0, 15, 30, 45]);
    expect(result.hour).toEqual([0]);
    expect(result.dayOfMonth).toEqual([1, 15]);
    expect(result.month).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(result.dayOfWeek).toEqual([1, 2, 3, 4, 5]);
    expect(result.command).toBe("/test_command");
  });

  test("should handle wildcard expressions", () => {
    const result = parser.parse("* * * * * /test_command");

    expect(result.minute).toEqual(Array.from({ length: 60 }, (_, i) => i));
    expect(result.hour).toEqual(Array.from({ length: 24 }, (_, i) => i));
    expect(result.dayOfMonth).toEqual(Array.from({ length: 31 }, (_, i) => i + 1));
    expect(result.month).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    expect(result.dayOfWeek).toEqual(Array.from({ length: 7 }, (_, i) => i));
  });

  test("should handle step values", () => {
    const result = parser.parse("*/20 */6 */10 */3 */2 /test_command");

    expect(result.minute).toEqual([0, 20, 40]);
    expect(result.hour).toEqual([0, 6, 12, 18]);
    expect(result.dayOfMonth).toEqual([1, 11, 21, 31]);
    expect(result.month).toEqual([1, 4, 7, 10]);
    expect(result.dayOfWeek).toEqual([0, 2, 4, 6]);
  });

  test("should handle list values", () => {
    const result = parser.parse("1,2,3 4,5,6 7,8,9 10,11,12 0,1,2 /test_command");

    expect(result.minute).toEqual([1, 2, 3]);
    expect(result.hour).toEqual([4, 5, 6]);
    expect(result.dayOfMonth).toEqual([7, 8, 9]);
    expect(result.month).toEqual([10, 11, 12]);
    expect(result.dayOfWeek).toEqual([0, 1, 2]);
  });

  test("should handle range values", () => {
    const result = parser.parse("1-3 4-6 7-9 10-12 0-2 /test_command");

    expect(result.minute).toEqual([1, 2, 3]);
    expect(result.hour).toEqual([4, 5, 6]);
    expect(result.dayOfMonth).toEqual([7, 8, 9]);
    expect(result.month).toEqual([10, 11, 12]);
    expect(result.dayOfWeek).toEqual([0, 1, 2]);
  });

  test("should throw an error for invalid expressions", () => {
    expect(() => parser.parse("invalid")).toThrow();
    expect(() => parser.parse("60 * * * * /test_command")).toThrow();
    expect(() => parser.parse("* 24 * * * /test_command")).toThrow();
    expect(() => parser.parse("* * 32 * * /test_command")).toThrow();
    expect(() => parser.parse("* * * 13 * /test_command")).toThrow();
    expect(() => parser.parse("* * * * 7 /test_command")).toThrow();
  });
});
