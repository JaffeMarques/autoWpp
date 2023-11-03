import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autowpp-label',
  templateUrl: './autowpp-label.component.html',
  styleUrls: ['./autowpp-label.component.scss']
})
export class AutowppLabelComponent {

  @Input()
  for: string = '';

  @Input()
  label: string = '';
}
