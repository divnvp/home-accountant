import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileDialogComponent } from './tile-dialog.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TileDialogComponent],
  imports: [CommonModule, TuiInputModule, SharedModule],
  exports: [TileDialogComponent],
})
export class TileDialogModule {}
