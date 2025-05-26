// custom-button.component.ts
import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() variant: 'filled' | 'outlined' | 'onlytext' = 'filled';
  @Input() color: 'primary' | 'danger' = 'primary';
  @Input() size: 'large' | 'medium' | 'small' = 'medium';
  @Input() disabled = false;
  @Input() tooltip: string = '';

  // Alterado para aceitar tanto string quanto boolean
  @Input() full: boolean | '' = false;

  @Input() icon = '';
  @Input() iconLeft = '';
  @Input() iconRight = '';
  @Input() loading = false;

  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.variant,
      this.color,
      this.size,
      this.disabled ? 'disabled' : '',
      (this.full === true || this.full === '') ? 'full' : '',
      this.loading ? 'loading' : ''
    ].filter(Boolean).join(' ');
  }
}
