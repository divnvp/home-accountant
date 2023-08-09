import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { SharedModule } from '../../../shared/shared.module';
import { TileCreatorModule } from '../tile-creator/tile-creator.module';

@NgModule({
  declarations: [TileComponent],
  imports: [CommonModule, SharedModule, TileCreatorModule],
  exports: [TileComponent],
})
export class TileModule {}
