import { Component } from '@angular/core';
import { ButtonsShowcaseComponent } from "./components/buttons-showcase/buttons-showcase.component";

@Component({
  selector: 'app-root',
  imports: [ButtonsShowcaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aula-forms-control-value-acessor';
}
