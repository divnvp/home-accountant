import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from './components/menu/menu.module';
import { MenuSegmentModule } from "./components/menu-segment/menu-segment.module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SharedModule, MenuModule, MenuSegmentModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
