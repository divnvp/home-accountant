import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SettingsService } from "./services/settings.service";
import { StateService } from "../services/state.service";
import { Settings } from "./models/settings";

@Component({
  selector: 'ha-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit{
  public settings$ = this.state.settings.value$;

  constructor(private readonly service: SettingsService, private readonly state: StateService) {
  }

  ngOnInit(): void {
    this.getSettings();
  }

  changeSettings(event: boolean): void {
    this.service.patchSettings(new Settings({ ...this.state.settings.value, darkTheme: event })).subscribe();
  }

  private getSettings() {
    this.service.getSettings().subscribe();
  }
}
