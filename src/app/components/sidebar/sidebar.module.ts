import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SharedModule, MenuModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
