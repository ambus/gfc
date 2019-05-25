import { printLogo } from "./logo/logo";
import { LogoType } from "./logo/logo-type";
import { loadTemplate } from "./load-template/load-template";
import { Template } from "./models/template";



export var main = function() {
  console.clear();
  printLogo(false, LogoType.Normal);
  loadTemplate().subscribe((template: Template) => {

  }, err => {
    
  })
}

main();
