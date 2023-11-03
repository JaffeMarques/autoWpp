import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-autowpp-button',
  templateUrl: './autowpp-button.component.html',
  styleUrls: ['./autowpp-button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class AutowppButtonComponent {
  @Input()
  label: string = '';

  @Input()
  variant: 'default' | 'default-outline' | 'full-width' | 'small'  = 'default';

  constructor(){}

  get class() {
    const result = [];
    result.push(`autowpp-button`);
    result.push(`${this.variant}`);
    return result;
  }
}
