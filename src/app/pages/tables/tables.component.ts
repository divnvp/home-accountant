import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ha-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent {}
