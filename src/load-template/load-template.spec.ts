import { loadTemplate } from "./load-template";
import * as mock from "mock-fs";
import { Template } from "../models/template";
import { TemplateFileMockup } from "../../test/mockup/template-file.mockup";

describe("load-template", () => {
  it("should export function to load template file", () => {
    expect(loadTemplate).toBeDefined();
  });

  it("should returned object from loadTemplate could be subscribed ", () => {
    expect(loadTemplate().subscribe).toBeDefined();
  });

  it("should return error when file does not exist", done => {
    mock({
      "./.gfc.json": ""
    });
    loadTemplate().subscribe(
      (temp: Template) => {},
      err => {
        mock.restore();
        done();
      }
    );
    mock.restore();
  });

  it("should return template file", done => {
    loadTemplate().subscribe(
      (temp: Template) => {
        expect(temp).toBeDefined();
        expect(temp.templateLines.length).toBe(1);
        done();
      },
      err => {}
    );
  });
});
