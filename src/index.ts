import { printLogo } from "./logo/logo";
import { LogoType } from "./logo/logo-type";


export var main = (function() {
  console.clear();
  printLogo(false, LogoType.Normal);
})();
