import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';

@NgModule({
  declarations: [BoardsComponent],
  imports: [CommonModule],
  exports: [BoardsComponent],
})
export class BoardsModule {}
