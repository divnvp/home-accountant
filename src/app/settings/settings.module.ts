import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DarkThemeToggleModule } from './components/dark-theme-toggle/dark-theme-toggle.module';
import { DarkThemeModule } from "./components/dark-theme/dark-theme.module";

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, FormsModule, DarkThemeModule, DarkThemeToggleModule],
  exports: [SettingsComponent, DarkThemeModule],
})
export class SettingsModule {}
