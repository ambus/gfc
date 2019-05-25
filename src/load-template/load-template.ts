import { Observable } from "rxjs";
import { AnonymousSubject } from "rxjs/internal/Subject";
import { Template } from "../models/template";
import * as fs from "fs";
import ora = require("ora");

let templateStandardFileLocation = "./.gfc.json";

export function loadTemplate(): Observable<Template> {
  return Observable.create((observer: AnonymousSubject<Template>) => {
    let searchFileWithTemplateSiner = ora("Search file with template");
    searchFileWithTemplateSiner.color = "cyan";
    searchFileWithTemplateSiner.start();

    let readFileSpiner = ora("Read template file");
    readFileSpiner.color = "cyan";

    try {
      if (fs.existsSync(templateStandardFileLocation)) {
        searchFileWithTemplateSiner.succeed();
        readFileSpiner.start();
        let template = JSON.parse(fs.readFileSync(templateStandardFileLocation, "utf8"));
        readFileSpiner.succeed();
        observer.next(template);
        observer.complete();
      } else {
        searchFileWithTemplateSiner.fail("The template file does not exist.");
        observer.error(new Error("the template file does not exist."));
        observer.complete();
      }
    } catch (eer) {
      readFileSpiner.fail("The default file with the commit template can't be loaded.");
      observer.error(new Error("The default file with the commit template can't be loaded."));
      observer.complete();
    }
  });
}
