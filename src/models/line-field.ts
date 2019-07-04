import { LineFieldType } from "./line-field-type";

export type LineField = {
    name: string,
    type: LineFieldType,
    textBefore:string,
    textAfter: string,
    question: string,
    description: string,
    data?: any;
    minLength?: number;
    maxLength?: number;
}