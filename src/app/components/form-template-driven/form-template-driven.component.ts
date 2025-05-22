import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StartsWithValidatorDirective } from '../../validators/starts-with.validator';

@Component({
  selector: 'app-form-template-driven',
  imports: [FormsModule, StartsWithValidatorDirective],
  templateUrl: './form-template-driven.component.html',
  styleUrl: './form-template-driven.component.scss'
})
export class FormTemplateDrivenComponent {
  startsWithValue = '';
}
