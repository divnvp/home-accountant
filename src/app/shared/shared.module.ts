import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TUI_MODULES } from './tui-modules.const';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, ...TUI_MODULES],
  exports: [RouterOutlet, RouterLink, ReactiveFormsModule, ...TUI_MODULES],
})
export class SharedModule {}
