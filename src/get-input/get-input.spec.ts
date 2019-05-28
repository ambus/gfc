import { lineInputSelectMockup } from "../../test/mockup/line-input-select.mockup";
import * as GetInput from "../../src/get-input/get-input";
import { lineInputStandardMockup } from "../../test/mockup/line-input-standard.mockup";
import { of } from "rxjs";
import { templateObjectMockup } from "../../test/mockup/template-object.mockup";

let _readInputMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
  return "testPassed";
});
let _readSelectMockup = jest.spyOn(GetInput, "_readSelect").mockImplementation(() => {
  return "testPassed";
});

describe("getInput", () => {
  beforeAll(() => {
    spyOn(console, "error");
    spyOn(console, "log");
  });

  beforeEach(() => {
    _readSelectMockup.mockClear();
    _readInputMockup.mockClear();
  });

  it("should check type of input and call select question", () => {
    GetInput._getInput(lineInputSelectMockup);
    expect(_readSelectMockup).toBeCalledTimes(1);
  });

  it("should check type of input and call standard input question", () => {
    GetInput._getInput(lineInputStandardMockup);
    expect(_readInputMockup).toBeCalledTimes(1);
  });

  it("should return string with text from param", () => {
    let returnQuestion = GetInput._getFormatedQuestionText("test");
    expect(returnQuestion).toContain("test");
  });

  it("should read 3 times text from stdin, one select and two times standard input text", done => {
    of(templateObjectMockup)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(_readInputMockup).toBeCalledTimes(2);
        expect(_readSelectMockup).toBeCalledTimes(1);
        expect(value.commit).toBe("testPassed(testPassed): testPassed");
        done();
      });
  });
});
