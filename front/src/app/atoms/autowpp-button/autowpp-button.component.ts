import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-autowpp-button',
  templateUrl: './autowpp-button.component.html',
  styleUrls: ['./autowpp-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, NgIf],
})
export class AutowppButtonComponent {
  @Input()
  label: string = '';

  @Input()
  type: string = '';

  @Input()
  icon: string = '';

  @Input()
  disabled: string = '';

  @Input()
  variant:
    | 'default'
    | 'default-outline'
    | 'full-width'
    | 'small'
    | 'small-outline'
    | 'outline' = 'default';

  constructor() {}

  get class() {
    const result = [];
    result.push(`autowpp-button`);
    result.push(`${this.variant}`);
    if (this.icon) {
      result.push('icon-button');
    }
    if (this.disabled) {
      result.push('disabled');
    }
    return result;
  }
}
