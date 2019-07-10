import { LineField } from "./line-field";
import { Options } from "./options";

export type TemplateLine = {
    description: string;
    lineFields: LineField[],
    startString?: string;
    endString?: string;
    options?: Options;
}