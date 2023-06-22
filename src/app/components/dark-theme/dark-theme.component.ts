import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractTuiThemeSwitcher } from '@taiga-ui/cdk';

@Component({
  selector: 'ha-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DarkThemeComponent extends AbstractTuiThemeSwitcher {}
