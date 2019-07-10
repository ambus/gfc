import { Observable } from "rxjs";
import { AnonymousSubject } from "rxjs/internal/Subject";
import { Template } from "../models/template";
import * as fs from "fs";
import ora = require("ora");
import { LineFieldType } from "../models/line-field-type";
var readlineSync = require("readline-sync");
import chalk from "chalk";
import { _getInput, _readYN } from "../get-input/get-input";

let templateStandardFileLocation = "./.gfc.json";

export function loadTemplate(fileLocation: string = templateStandardFileLocation): Observable<Template> {
  return Observable.create((observer: AnonymousSubject<Template>) => {
    let searchFileWithTemplateSiner = ora("Search file with template");
    searchFileWithTemplateSiner.color = "cyan";
    searchFileWithTemplateSiner.start();

    let readFileSpiner = ora("Read template file");
    readFileSpiner.color = "cyan";

    let errorFunction = () => {
      searchFileWithTemplateSiner.fail("The template file not exist.");
      if (_readYN(chalk.blueBright.bold("Load default AngularJS commit Style?"))) {
        searchFileWithTemplateSiner.info("load default template...");
        observer.next(default_template);
        observer.complete();
      } else {
        observer.error(new Error("the template file not exist."));
      }
    };

    try {
      if (fs.existsSync(fileLocation)) {
        searchFileWithTemplateSiner.succeed();
        readFileSpiner.start();
        let template = JSON.parse(fs.readFileSync(fileLocation, "utf8"));
        readFileSpiner.succeed();
        observer.next(template);
        observer.complete();
      } else {
        errorFunction();
      }
    } catch (err) {
      errorFunction();
    }
  });
}

let default_template: Template = {
  templateLines: [
    {
      description: "subject",
      lineFields: [
        {
          name: "type",
          type: LineFieldType.Select,
          startString: "",
          endString: "",
          question: "Commit type:",
          description: "",
          data: ["fix", "feat", "build", "ci", "docs", "perf", "refactor", "style", "test"]
        },
        {
          name: "scope",
          type: LineFieldType.Text,
          startString: "(",
          endString: "):",
          question: "Scope:",
          description: "Scope of affected module.",
          data: []
        },
        {
          name: "message",
          type: LineFieldType.Text,
          startString: " ",
          endString: "",
          question: "Commit message:",
          description: "Message of commit",
          data: []
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
    addStartStringWhenEmpty: false, 
    addEndStringWhenEmpty: false
  }
};
