import { Aurelia, PLATFORM, FrameworkConfiguration } from 'aurelia-framework'
import environment from './environment';

let elements = [
  { name: 'test-element', selector: 'test-element' },
  { name: 'af-input', selector: 'af-input' }
];

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .basicConfiguration();

  configureResources(aurelia.use);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  await aurelia.use.apply();

  aurelia.enhance();
}

export function configureResources(config: FrameworkConfiguration) {
  config.globalResources(
    elements.map(e => PLATFORM.moduleName(`elements/${e.name}`))
  );
}
