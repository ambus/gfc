import * as Main from "./main";

let mainMockup = jest.spyOn(Main, "main").mockImplementation(() => {});

describe("Main", () => {
  beforeAll(() => {
    spyOn(console, "error");
    spyOn(console, "log");
  });

  beforeEach(() => {
    mainMockup.mockClear();
  });

  it("should have main funnction", () => {
    expect(Main.main).toBeDefined();
  });
  
});
