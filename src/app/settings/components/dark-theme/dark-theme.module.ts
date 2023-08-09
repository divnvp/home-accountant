import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemeComponent } from './dark-theme.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DarkThemeComponent],
  imports: [CommonModule, SharedModule],
  exports: [DarkThemeComponent],
})
export class DarkThemeModule {}
