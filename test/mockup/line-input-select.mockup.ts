import { LineField } from "../../src/models/line-field";
import { LineFieldType } from "../../src/models/line-field-type";

export const lineInputSelectMockup: LineField = {
  name: "commit type",
  type: LineFieldType.Select,
  startString: "",
  endString: "",
  question: "Commit type:",
  description: "",
  data: ["fix", "feat"]
};
