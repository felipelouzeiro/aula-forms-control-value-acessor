import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.scss'
})
export class FormReactiveComponent {
  title = 'aula-forms-control-value-acessor';

  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    rua: [null, Validators.required],
    cidade: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null]
  });

  onClick() {
    console.log(this.form);
  }
}
