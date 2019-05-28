import { LineField } from "../../src/models/line-field";
import { LineFieldType } from "../../src/models/line-field-type";

export const lineFieldsMockup: LineField[] = [
  {
    name: "commit type",
    type: LineFieldType.Select,
    textBefore: "",
    textAfter: "",
    question: "Commit type",
    description: "",
    data: ["fix", "feat"]
  },
  {
    name: "scope",
    type: LineFieldType.Text,
    textBefore: "(",
    textAfter: "):",
    question: "Scope:",
    description: "Scope of affected module.",
    data: []
  },
  {
    name: "message",
    type: LineFieldType.Text,
    textBefore: " ",
    textAfter: "",
    question: "Commit message:",
    description: "Message of commit",
    data: []
  }
];
