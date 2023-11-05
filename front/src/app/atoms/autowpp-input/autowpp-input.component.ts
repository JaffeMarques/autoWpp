import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autowpp-input',
  templateUrl: './autowpp-input.component.html',
  styleUrls: ['./autowpp-input.component.scss']
})
export class AutowppInputComponent {
  @Input()
  type: string = '';

  @Input()
  id: string = '';

  @Input()
  name: string = '';

  @Input()
  value: string = '';

  @Input()
  placeholder: string = '';
}
