import { LineField } from "./line-field";

export type TemplateLine = {
    description: string;
    lineFields: LineField[],
    startString: string;
    endString: string;
}