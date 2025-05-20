import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  label = input.required();
  inputValue = '';

  private ngControl = inject(NgControl, { optional: true });
  protected onTouched?: () => {};
  protected onChange?: (value: string) => {};
  protected isDisabled: boolean = false;

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // Como que o angular vai setar o valor do input
  writeValue(obj: string): void {
    this.inputValue = obj
  }

  // Quando o valor do input sofrer alguma alteração
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Quando o input sofrer alguma interação
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Quando o input estiver desabilitado
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
