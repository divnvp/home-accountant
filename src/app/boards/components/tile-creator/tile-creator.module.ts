import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileCreatorComponent } from './tile-creator.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [TileCreatorComponent],
  imports: [CommonModule, SharedModule],
  exports: [TileCreatorComponent],
})
export class TileCreatorModule {}
