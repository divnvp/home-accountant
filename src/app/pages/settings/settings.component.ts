import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ha-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
