import { Aurelia, PLATFORM, FrameworkConfiguration, TemplatingEngine, EnhanceInstruction } from 'aurelia-framework'
import { bootstrap } from "aurelia-bootstrapper";
import environment from './environment';

let elements = [
  { name: 'test-element', selector: 'test-element' },
  { name: 'af-input', selector: 'af-input' }
];

let aureliaInstance: Aurelia;

export async function configure(aurelia: Aurelia) {
  aureliaInstance = aurelia;

  aurelia.use
    .basicConfiguration();

  configureResources(aurelia.use);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  await aurelia.use.apply();

  // enhanceElements(['test-element']);
}

export function enhanceElements(elements: { tagName: string, bindingContext: any }[]) {
  elements.forEach(element => {
    var elements = document.getElementsByTagName(element.tagName);
    for (var i = 0; i < elements.length; i++) {
      enhanceElement(elements[i]);
    }
  });
}

let enhanceElement = function (element: Element, bindingContext = null) {
  let engine = aureliaInstance.container.get(TemplatingEngine);
  let component = engine.enhance({ container: aureliaInstance.container, element: element, resources: aureliaInstance.resources, bindingContext: bindingContext });
  component.attached();
}

let configureResources = function (config: FrameworkConfiguration) {
  config.globalResources(
    elements.map(e => PLATFORM.moduleName(`elements/${e.name}`))
  );
}