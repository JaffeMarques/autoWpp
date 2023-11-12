import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autowpp-table',
  templateUrl: './autowpp-table.component.html',
  styleUrls: ['./autowpp-table.component.scss'],
})
export class AutowppTableComponent {
  @Input()
  header: string[] = [];

  @Input()
  lines: any = {};
}
