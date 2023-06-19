import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TUI_MODULES } from './tui-modules.const';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterOutlet, RouterLink, ...TUI_MODULES],
  exports: [RouterOutlet, RouterLink, ...TUI_MODULES],
})
export class SharedModule {}
