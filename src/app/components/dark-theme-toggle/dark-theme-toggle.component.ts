import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'ha-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkThemeToggleComponent {
  public toggle = this.stateService.darkThemeState$.getValue();

  constructor(private stateService: StateService) {}

  changeToggle(event: boolean) {
    this.toggle = event;
    localStorage.setItem('dark-theme', JSON.stringify(event));

    this.stateService.darkThemeState$.next(event);
  }
}
