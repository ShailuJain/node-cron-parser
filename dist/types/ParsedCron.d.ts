export interface ParsedCron {
    minute: number[];
    hour: number[];
    dayOfMonth: number[];
    month: number[];
    dayOfWeek: number[];
    command: string;
}
