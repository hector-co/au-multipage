import { bindable, bindingMode, containerless, inject } from "aurelia-framework";

@containerless()
export class AfInput {
  private static currentId: number = 0;

  @bindable inputId: string;
  @bindable inputName: string;
  @bindable label: string;
  @bindable placeholder: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable required: any;
  requiredText: string;

  bind() {
    if (!this.inputId) {
      AfInput.currentId++;
      this.inputId = `af-input-${AfInput.currentId}`;
    }
    if (!this.inputName) this.inputName = '';
    if (!this.placeholder) this.placeholder = '';

    if (this.required !== null && this.required !== undefined && this.required !== "false") {
      if (this.required === '' || this.required === 'true' || this.required === true) {
        this.requiredText = '*';
        this.required = true;
      }
      else {
        this.requiredText = this.required;
        this.required = true;
      }
    }
  }

}