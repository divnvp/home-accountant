import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeModule } from '../../pages/home/home.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, SidebarModule, HomeModule],
  exports: [PageComponent],
})
export class PageModule {}
