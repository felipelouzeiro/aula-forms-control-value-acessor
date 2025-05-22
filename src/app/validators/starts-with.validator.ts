import { Directive, input, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[starts-with]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: StartsWithValidatorDirective,
      multi: true
    }
  ]
})
export class StartsWithValidatorDirective implements Validator, OnChanges {
  private fn?: () => void

  startsWithValue = input.required<string>({ alias: 'starts-with' });

  ngOnChanges(changes: SimpleChanges): void {
    this.fn && this.fn()
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const controlValue = control.value as string | null;

    if (!controlValue) {
      return null;
    }

    if (controlValue.startsWith(this.startsWithValue())) {
      return null;
    }

    return {
      startsWith: {
        expectedValue: this.startsWithValue(),
        currenceValue: controlValue
      }
    };
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.fn = fn
  }
}
