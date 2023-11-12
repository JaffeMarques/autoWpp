import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-autowpp-input',
  templateUrl: './autowpp-input.component.html',
  styleUrls: ['./autowpp-input.component.scss'],
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

  /**
   * Invoked when the model has been changed
   */
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
}
