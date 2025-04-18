import type { ParsedCron } from "../types/ParsedCron";
export declare class TableFormatter {
    private readonly FIELD_WIDTH;
    format(parsedCron: ParsedCron): string;
    private formatLine;
}
