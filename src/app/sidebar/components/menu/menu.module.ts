import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../../shared/shared.module';
import { MenuSegmentModule } from '../menu-segment/menu-segment.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, SharedModule, MenuSegmentModule],
  exports: [MenuComponent],
})
export class MenuModule {}
