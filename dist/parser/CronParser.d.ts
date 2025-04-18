import type { ParsedCron } from "../types/ParsedCron";
export declare class CronParser {
    private fieldParsers;
    constructor();
    parse(cronExpression: string): ParsedCron;
}
