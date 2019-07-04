import { loadTemplate } from "./load-template";
import * as mock from "mock-fs";
import { Template } from "../models/template";
import { TemplateFileMockup } from "../../test/mockup/template-file.mockup";
import * as getInput from "../get-input/get-input";
import { tap } from "rxjs/operators";

describe("load-template", () => {
  it("should export function to load template file", () => {
    expect(loadTemplate).toBeDefined();
  });

  it("should returned object from loadTemplate could be subscribed ", () => {
    expect(loadTemplate().subscribe).toBeDefined();
  });

  it("should return error when file does not exist and user not want load default template", done => {
    let spyFN = jest.spyOn(getInput, "_readYN").mockReturnValue(false);

    loadTemplate("test.json")
      .pipe(tap(val => console.warn(val)))
      .subscribe(
        (temp: Template) => {},
        err => {
          expect(err).toBeDefined();
          mock.restore();
          done();
        }
      );
  });

  it("should return template file", done => {
    mock({
      "./.gfc.json": TemplateFileMockup
    });
    loadTemplate().subscribe(
      (temp: Template) => {
        expect(temp).toBeDefined();
        expect(temp.templateLines.length).toBe(1);
        mock.restore();

        done();
      },
      err => {}
    );
  });
});
