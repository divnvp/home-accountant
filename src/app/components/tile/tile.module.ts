import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile.component';
import { SharedModule } from '../../shared/shared.module';
import { TileCreaterModule } from '../tile-creater/tile-creater.module';

@NgModule({
  declarations: [TileComponent],
  imports: [CommonModule, SharedModule, TileCreaterModule],
  exports: [TileComponent],
})
export class TileModule {}
