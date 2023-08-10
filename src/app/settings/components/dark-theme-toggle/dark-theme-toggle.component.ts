import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ha-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkThemeToggleComponent {
  @Input() darkTheme: boolean | undefined;
  @Output() darkThemeToggleChange = new EventEmitter<boolean>();

  changeToggle(event: boolean) {
    this.darkThemeToggleChange.emit(event);
  }
}
