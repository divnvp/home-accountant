import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TileComponent],
  imports: [CommonModule, SharedModule],
  exports: [TileComponent],
})
export class TileModule {}
