import { getCommitTextFromInput } from "./get-input/get-input";
import { loadTemplate } from "./load-template/load-template";
import { printLogo } from "./logo/logo";
import { LogoType } from "./logo/logo-type";
import { TemplateWithCommit } from "./models/template-with-commit";
const simpleGit = require("simple-git")(__dirname);

export var main = function() {
  console.clear();
  printLogo(false, LogoType.Normal);
  loadTemplate()
    .pipe(getCommitTextFromInput())
    .subscribe(
      (templateWithCommit: TemplateWithCommit) => {
        // console.warn(templateWithCOmmit.commit);
        // simpleGit.status((err, status) => console.log(status));
      },
      err => {}
    );
};
