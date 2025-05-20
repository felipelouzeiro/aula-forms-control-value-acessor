import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula-forms-control-value-acessor';

  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    rua: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null]
  });

  onClick() {
    console.log(this.form);
  }
}
