import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSegmentComponent } from './menu-segment.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MenuSegmentComponent],
  imports: [CommonModule, SharedModule],
  exports: [MenuSegmentComponent],
})
export class MenuSegmentModule {}
