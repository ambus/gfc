import { Template } from "../../src/models/template";
import { LineFieldType } from "../../src/models/line-field-type";

export const templateObjectWithOptionsMockup: Template = {
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
    },
    {
      description: "body",
      startString: "\r\n\r\n",
      lineFields: [
        {
          name: "description",
          type: LineFieldType.Text,
          startString: "",
          endString: "",
          question: "Description:",
          description:
            "Just as in the subject, use the imperative, present tense: 'change' not 'changed' nor 'changes'.\nThe body should include the motivation for the change and contrast this with previous behavior.",
          data: []
        }
      ]
    },
    {
      description: "footer",
      startString: "\r\n\r\n",
      lineFields: [
        {
          name: "description",
          type: LineFieldType.Text,
          startString: "",
          endString: "",
          question: "Footer:",
          description:
            "The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes. \nBreaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. \nThe rest of the commit message is then used for this.",
          data: []
        }
      ]
    }
  ],
  options: {
    addStartStringWhenEmpty: true,
    addEndStringWhenEmpty: true
  }
};
