import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ha-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent {}
