import { bindable } from "aurelia-framework";

export class TestElement {
  @bindable value: string;

  bind(bindingContext) {
    this.value = bindingContext.value;
  }
}
