import { Component } from '@angular/core';
import { FormTemplateDrivenComponent } from "./components/form-template-driven/form-template-driven.component";
import { FormReactiveComponent } from "./components/form-reactive/form-reactive.component";

@Component({
  selector: 'app-root',
  imports: [FormTemplateDrivenComponent, FormReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula-forms-control-value-acessor';
}
