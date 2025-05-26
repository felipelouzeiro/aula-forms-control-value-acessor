import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons-showcase',
  imports: [CommonModule ,CustomButtonComponent],
  templateUrl: './buttons-showcase.component.html',
  styleUrl: './buttons-showcase.component.scss'
})
export class ButtonsShowcaseComponent {

}
