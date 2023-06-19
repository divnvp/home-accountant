import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TUI_MODULES } from './tui-modules.const';

@NgModule({
  declarations: [],
  imports: [CommonModule, ...TUI_MODULES],
  exports: [TUI_MODULES],
})
export class SharedModule {}
