import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemeToggleComponent } from './dark-theme-toggle.component';
import { DarkThemeModule } from '../dark-theme/dark-theme.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DarkThemeToggleComponent],
  imports: [CommonModule, SharedModule, FormsModule, DarkThemeModule],
  exports: [DarkThemeToggleComponent],
})
export class DarkThemeToggleModule {}
