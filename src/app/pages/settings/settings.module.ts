import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DarkThemeToggleModule } from '../../components/dark-theme-toggle/dark-theme-toggle.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, FormsModule, DarkThemeToggleModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
