import { getCommitTextFromInput, _readYN } from "./get-input/get-input";
import { loadTemplate } from "./load-template/load-template";
import { printLogo } from "./logo/logo";
import { LogoType } from "./logo/logo-type";
import { TemplateWithCommit } from "./models/template-with-commit";
const simpleGit = require("simple-git")();
import chalk from "chalk";

export var main = function() {
  console.clear();
  printLogo(false, LogoType.Normal);
  loadTemplate()
    .pipe(getCommitTextFromInput())
    .subscribe(
      (templateWithCommit: TemplateWithCommit) => {
        console.log(chalk.yellowBright.bold("Built commit:"));
        console.log(chalk.cyanBright(templateWithCommit.commit));
        if (_readYN("Execute commit?")) {
          simpleGit.commit(templateWithCommit.commit, status => {
            if (!status) {
              console.error(chalk.bgGreenBright.bold("Done!"));
            } else {
              console.error(chalk.white.bold.bgRed(status));
            }
          });
        } else {
          console.warn(chalk.white.bold.bgRed("Aborted"));
        }
      },
      err => {
        console.warn(chalk.white.bold.bgRed("Aborted"));
      }
    );
};
