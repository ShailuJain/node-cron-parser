export declare abstract class FieldParser {
    protected min: number;
    protected max: number;
    private fieldName;
    constructor(fieldName: string, min: number, max: number);
    getFieldName(): string;
    parse(expression: string): number[];
    protected parseValue(value: string): number;
    private generateRangeWithStep;
}
