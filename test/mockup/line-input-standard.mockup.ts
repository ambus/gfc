import { LineField } from "../../src/models/line-field";
import { LineFieldType } from "../../src/models/line-field-type";

export const lineInputStandardMockup: LineField = {
  name: "commit type",
  type: LineFieldType.Text,
  textBefore: "",
  textAfter: "",
  question: "Commit type:",
  description: "",
  data: []
};
