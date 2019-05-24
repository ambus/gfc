import gradient = require("gradient-string");
import { LogoType } from "./logo-type";

export var logoNormal: string = gradient.vice.multiline(
  [
    "                      ██████═╗ ███████╗ ██████╗",
    "                      ██╔════╝ ██╔════╝██╔════╝",
    "                      ██║  ███╗█████╗  ██║     ",
    "                      ██║   ██║██╔══╝  ██║     ",
    "                      ╚██████╔╝██║     ╚██████╗",
    "                       ╚═════╝ ╚═╝      ╚═════╝",
    "┌─┐┬┌┬┐  ┌─┐┌─┐┬─┐┌┬┐┌─┐┌┬┐┌┬┐┌─┐┌┬┐   ┌─┐┌─┐┌┬┐┌┬┐┬┌┬┐  ┌┬┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐",
    "│ ┬│ │   ├┤ │ │├┬┘│││├─┤ │  │ ├┤  ││   │  │ ││││││││ │   │││├┤ └─┐└─┐├─┤│ ┬├┤ ",
    "└─┘┴ ┴   └  └─┘┴└─┴ ┴┴ ┴ ┴  ┴ └─┘─┴┘   └─┘└─┘┴ ┴┴ ┴┴ ┴   ┴ ┴└─┘└─┘└─┘┴ ┴└─┘└─┘"
  ].join("\n"),
  { interpolation: "hsv" }
);

export var logoMedium: string = gradient.vice.multiline(
  ["██████═╗ ███████╗ ██████╗", "██╔════╝ ██╔════╝██╔════╝", "██║  ███╗█████╗  ██║     ", "██║   ██║██╔══╝  ██║     ", "╚██████╔╝██║     ╚██████╗", " ╚═════╝ ╚═╝      ╚═════╝"].join("\n")
);

export var logoSmall: string = gradient.vice.multiline(["╔═╗╔═╗╔═╗", "║ ╦╠╣ ║  ", "╚═╝╚  ╚═╝"].join("\n"));

export function printLogo(checkConsoleSize: boolean = false, type?: LogoType) {
  if (checkConsoleSize || typeof type !== "undefined") {
    type = getLogoTypeForAvailableSpace();
  }

  switch (type) {
    case LogoType.Normal:
      console.log(logoNormal);
      break;
    case LogoType.Small:
      console.log(logoSmall);
      break;
    case LogoType.Medium:
      console.log(logoMedium);
      break;
    default:
      console.log(logoNormal);
      break;
  }
}

export function getLogoTypeForAvailableSpace(): LogoType {
  switch (true) {
    case process.stdout.columns >= 100 && process.stdout.rows >= 20:
      return LogoType.Normal;
    case (process.stdout.columns < 100 && process.stdout.columns >= 50) || (process.stdout.rows < 20 && process.stdout.rows >= 10):
      return LogoType.Medium;
    default:
      return LogoType.Small;
  }
}
