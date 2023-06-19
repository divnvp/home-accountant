import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeModule } from '../../pages/home/home.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, SidebarModule, HomeModule, SharedModule],
  exports: [HomeLayoutComponent],
})
export class HomeLayoutModule {}
