import { printLogo, logoMedium, logoSmall, logoNormal, getLogoTypeForAvailableSpace } from "./logo";
import { LogoType } from "./logo-type";
describe("logo", () => {
  it("should print asci logo in console", () => {
    let consoleSpy = jest.spyOn(console, "log").mockImplementation();
    printLogo(false, LogoType.Normal);
    printLogo(false, LogoType.Medium);
    printLogo(false, LogoType.Small);
    expect(consoleSpy).toBeCalledTimes(3);
  });

  it("should return normal logo type", () => {
    process.stdout.columns = 100;
    process.stdout.rows = 20;
    let logoType: LogoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Normal);
  });

  it("should return medium logo type", () => {
    process.stdout.columns = 100;
    process.stdout.rows = 19;
    let logoType: LogoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Medium);
    process.stdout.columns = 100;
    process.stdout.rows = 10;
    logoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Medium);
    process.stdout.columns = 50;
    process.stdout.rows = 10;
    logoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Medium);
    process.stdout.columns = 50;
    process.stdout.rows = 20;
    logoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Medium);
  });

  it("should return small logo type", () => {
    process.stdout.columns = 100;
    process.stdout.rows = 9;
    let logoType: LogoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Small);
    process.stdout.columns = 49;
    process.stdout.rows = 9;
    logoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Small);
    process.stdout.columns = 49;
    process.stdout.rows = 20;
    logoType = getLogoTypeForAvailableSpace();
    expect(logoType).toBe(LogoType.Small);
  });

  it("should export logo asci string", () => {
    expect(logoNormal).toBeDefined();
    expect(logoMedium).toBeDefined();
    expect(logoSmall).toBeDefined();
  });
});
