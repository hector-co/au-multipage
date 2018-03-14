import { Aurelia, PLATFORM, FrameworkConfiguration } from 'aurelia-framework'
import environment from '../environment';

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

  await aurelia.start();
  aurelia.enhance();
}

export function configureResources(config: FrameworkConfiguration) {
  config.globalResources([PLATFORM.moduleName('app/elements/test-element')]);
}
