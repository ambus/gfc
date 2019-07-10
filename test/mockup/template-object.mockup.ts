import { Template } from "../../src/models/template";
import { LineFieldType } from "../../src/models/line-field-type";

export const templateObjectMockup: Template = {
  templateLines: [
    {
      description: "first line",
      lineFields: [
        {
          name: "commit type",
          type: LineFieldType.Select,
          startString: "",
          endString: "",
          question: "Commit type",
          description: "",
          data: ["fix", "feat"]
        },
        {
          name: "scope",
          type: LineFieldType.Text,
          startString: "(",
          endString: "):",
          question: "Scope:",
          description: "Scope of affected module.",
          data: [],
          minLength: 5,
          maxLength: 15
        },
        {
          name: "message",
          type: LineFieldType.Text,
          startString: " ",
          endString: "",
          question: "Commit message:",
          description: "Message of commit",
          data: [],
          minLength: 5,
          maxLength: 85
        }
      ]
    }
  ],
  options: {
    addStartStringWhenEmpty: false,
    addEndStringWhenEmpty: false
  }
};
