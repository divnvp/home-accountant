import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { SharedModule } from '../shared/shared.module';
import { TileModule } from './components/tile/tile.module';
import { BoardsService } from "./services/boards.service";
import { TileCreatorModule } from "./components/tile-creator/tile-creator.module";
import { TileDialogModule } from "./components/tile-dialog/tile-dialog.module";

@NgModule({
  declarations: [BoardsComponent],
  imports: [CommonModule, SharedModule, TileModule, TileCreatorModule, TileDialogModule],
  exports: [BoardsComponent],
  providers: [BoardsService]
})
export class BoardsModule {}
