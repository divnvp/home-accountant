import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileCreaterComponent } from './tile-creater.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TileCreaterComponent],
  imports: [CommonModule, SharedModule],
  exports: [TileCreaterComponent],
})
export class TileCreaterModule {}
