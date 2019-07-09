import { LineFieldType } from "./line-field-type";
import { Options } from "./options";

export type LineField = {
    name: string,
    type: LineFieldType,
    startString?:string,
    endString?: string,
    question: string,
    description: string,
    data?: any;
    minLength?: number;
    maxLength?: number;
    options?: Options;

}