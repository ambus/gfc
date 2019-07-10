import { lineInputSelectMockup } from "../../test/mockup/line-input-select.mockup";
import * as GetInput from "../../src/get-input/get-input";
import { lineInputStandardMockup } from "../../test/mockup/line-input-standard.mockup";
import { of } from "rxjs";
import { templateObjectMockup } from "../../test/mockup/template-object.mockup";
import { templateObjectWithOptionsMockup } from "../../test/mockup/template-object-with-options.mockup";
import { Template } from "../models/template";

describe("getInput", () => {
  let _readInputMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
    return "testPassed";
  });
  let _readSelectMockup = jest.spyOn(GetInput, "_readSelect").mockImplementation(() => {
    return "testPassed";
  });
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

  it("should add body and footer field with startString", done => {
    of(templateObjectWithOptionsMockup)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(_readInputMockup).toBeCalledTimes(4);
        expect(_readSelectMockup).toBeCalledTimes(1);
        expect(value.commit).toBe(`testPassed(testPassed): testPassed\r\n\r\ntestPassed\r\n\r\ntestPassed`);
        done();
      });
  });
});

describe("getInput with options", () => {
  let _readInputMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
    return "testPassed";
  });

  let _readSelectMockup = jest.spyOn(GetInput, "_readSelect").mockImplementation(() => {
    return "testPassed";
  });
  beforeAll(() => {
    spyOn(console, "error");
    spyOn(console, "log");
  });

  beforeEach(() => {
    _readSelectMockup.mockClear();
    _readInputMockup.mockClear();
  });

  it("should not add text from field startString and endString", done => {
    const clonedTemplate = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));
    clonedTemplate.options = {
      addEndStringWhenEmpty: false,
      addStartStringWhenEmpty: false
    };

    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return index++ < 2 ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed(testPassed): testPassed`);
        done();
      });
  });

  it("should not add text if footer input is empty", done => {
    const clonedTemplate = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));

    clonedTemplate.templateLines[2].options = {
      addEndStringWhenEmpty: false,
      addStartStringWhenEmpty: false
    };
    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return index++ < 3 ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed(testPassed): testPassed\r\n\r\ntestPassed`);
        done();
      });
  });

  it("should add text if footer input is empty", done => {
    const clonedTemplate = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));

    clonedTemplate.templateLines[2].options = {
      addEndStringWhenEmpty: true,
      addStartStringWhenEmpty: true
    };
    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return index++ < 3 ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed(testPassed): testPassed\r\n\r\ntestPassed\r\n\r\n`);
        done();
      });
  });

  it("should not add text in lineField when input is empty", done => {
    const clonedTemplate = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));

    clonedTemplate.templateLines[0].lineFields[1].options = {
      addEndStringWhenEmpty: false,
      addStartStringWhenEmpty: false
    };
    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return index++ !== 0 ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed testPassed\r\n\r\ntestPassed\r\n\r\ntestPassed`);
        done();
      });
  });

  it("should add text in lineField when input is empty and options will not definded", done => {
    const clonedTemplate = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));

    clonedTemplate.templateLines[0].lineFields[1].options = undefined;
    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return index++ !== 0 ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed(): testPassed\r\n\r\ntestPassed\r\n\r\ntestPassed`);
        done();
      });
  });

    it("should not add text in lineField but should add startText and endText from templateLine", done => {
    const clonedTemplate: Template = JSON.parse(JSON.stringify(templateObjectWithOptionsMockup));
    clonedTemplate.options = {
      addEndStringWhenEmpty: true,
      addStartStringWhenEmpty: true
    };
    clonedTemplate.templateLines[0].lineFields[1].options = {
      addEndStringWhenEmpty: false,
      addStartStringWhenEmpty: false
    };

    let index = 0;

    let _readSelectMockup = jest.spyOn(GetInput, "_readText").mockImplementation(() => {
      return (index++ !== 0 && index !== 3) ? "testPassed" : "";
    });

    of(clonedTemplate)
      .pipe(GetInput.getCommitTextFromInput())
      .subscribe(value => {
        expect(value.commit).toBe(`testPassed testPassed\r\n\r\n\r\n\r\ntestPassed`);
        done();
      });
  });
});
