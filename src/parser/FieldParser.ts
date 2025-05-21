export abstract class FieldParser {
  protected min: number;
  protected max: number;
  private fieldName: string;

  constructor(fieldName: string, min: number, max: number) {
    this.fieldName = fieldName;
    this.min = min;
    this.max = max;
  }

  getFieldName(): string {
    return this.fieldName;
  }

  parse(expression: string): number[] {
    if (expression === "*") {
      return this.generateRangeWithStep(this.min, this.max, 1);
    }

    if (expression.startsWith("*/")) {
      const step = Number.parseInt(expression.substring(2));
      if (isNaN(step) || step <= 0) {
        throw new Error(`Invalid step value in ${this.fieldName}: ${expression}`);
      }
      return this.generateRangeWithStep(this.min, this.max, step);
    }

    if (expression.includes(",")) {
      const values = expression.split(",").flatMap((value) => this.parse(value));
      return [...new Set(values)].sort((a, b) => a - b);
    }

    if (expression.includes("-") && expression.includes("/")) {
      const arr = expression.split("/");
      const [start, end] = arr[0].split("-").map((value) => Number.parseInt(value));
      const step = Number.parseInt(arr[1]);
      if (start > end) {
        throw new Error(`Invalid range in ${this.fieldName}: ${expression}`);
      }
      if (isNaN(step) || step <= 0) {
        throw new Error(`Invalid step value in ${this.fieldName}: ${expression}`);
      }
      return this.generateRangeWithStep(start, end, step);
    }

    if (expression.includes("-")) {
      const [start, end] = expression.split("-").map((value) => this.parseValue(value));
      if (start > end) {
        throw new Error(`Invalid range in ${this.fieldName}: ${expression}`);
      }
      return this.generateRangeWithStep(start, end, 1);
    }
    
    const value = this.parseValue(expression);
    return [value];
  }

  protected parseValue(value: string): number {
    const parsedValue = Number.parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new Error(`Invalid value in ${this.fieldName}: ${value}`);
    }
    if (parsedValue < this.min || parsedValue > this.max) {
      throw new Error(`Value out of range in ${this.fieldName}: ${value}. Valid range is ${this.min}-${this.max}`);
    }
    return parsedValue;
  }

  private generateRangeWithStep(start: number, end: number, step: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  }
}
