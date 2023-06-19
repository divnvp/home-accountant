import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TUI_MODULES } from './tui-modules.const';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, ...TUI_MODULES],
  exports: [RouterOutlet, ...TUI_MODULES],
})
export class SharedModule {}
