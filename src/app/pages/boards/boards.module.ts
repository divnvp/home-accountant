import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { SharedModule } from '../../shared/shared.module';
import { TileModule } from '../../components/tile/tile.module';

@NgModule({
  declarations: [BoardsComponent],
  imports: [CommonModule, SharedModule, TileModule],
  exports: [BoardsComponent],
})
export class BoardsModule {}
