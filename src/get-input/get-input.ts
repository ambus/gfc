import { LineField } from "../models/line-field";
import { LineFieldType } from "../models/line-field-type";
import chalk from "chalk";
import { OperatorFunction, Observable, throwError } from "rxjs";
import { TemplateWithCommit } from "../models/template-with-commit";
import { Template } from "../models/template";
import { map, catchError } from "rxjs/operators";
import { TemplateLine } from "../models/template-line";

var readlineSync = require("readline-sync");

export const _getInput = (lineField: LineField): string => {
  switch (lineField.type) {
    case LineFieldType.Select:
      return _readSelect(lineField.data, lineField.question);
    case LineFieldType.Text:
      return _readText(lineField.question);
    default:
      break;
  }
};

export const _readSelect = (options: string[], question: string): string => {
  let index = readlineSync.keyInSelect(options, _getFormatedQuestionText(question));
  return options[index];
};

export const _readText = (question: string): string => {
  return readlineSync.question(_getFormatedQuestionText(question));
};

export const _readYN = (question: string): string => {
  return readlineSync.keyInYN(_getFormatedQuestionText(question));
};

export const _getFormatedQuestionText = (question: string): string => {
  return chalk.blueBright.bold(question);
};

export function getCommitTextFromInput(): OperatorFunction<Template, TemplateWithCommit> {
  return (source: Observable<Template>) => {
    return source.pipe(
      map<Template, TemplateWithCommit>((template: Template) => {
        let commit: string = "";
        template.templateLines.forEach((templateLine: TemplateLine) => {
          commit += templateLine.startString || "";
          templateLine.lineFields.forEach(async (lineField: LineField) => {
            let returnedInput = _getInput(lineField);
            if (returnedInput) {
              commit += lineField.textBefore || "";
              commit += returnedInput;
              commit += lineField.textAfter || "";
            }
          });
          commit += templateLine.endString || "";
        });
        return { template: template, commit: commit };
      }),
      catchError((err: any, caught: Observable<TemplateWithCommit>) => {
        this.logger.error(`Napotkano błąd podczas odczytu danych z inputów `, err);
        return throwError(err);
      })
    );
  };
}
