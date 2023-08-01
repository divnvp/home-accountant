import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 } from 'uuid';
import { StateService } from '../../services/state.service';
import { BoardsService } from '../../services/boards/boards.service';
import { Board } from '../../models/board';

@Component({
  selector: 'ha-tile-creator',
  templateUrl: './tile-creator.component.html',
  styleUrls: ['./tile-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileCreatorComponent {
  public form = new FormGroup({
    tileName: new FormControl(''),
  });

  public openedDialog = false;

  constructor(private readonly state: StateService, private readonly service: BoardsService) {}

  public createBoard(): void {
    this.openedDialog = !this.openedDialog;
  }

  public onSubmit() {
    this.createBoardApi();
    // this.state.setBoards(this.state.boards.value.concat(board));

    this.openedDialog = false;
    this.form.reset();
  }

  private createBoardApi() {
    const board: Board = {
      id: v4(),
      width: 1,
      height: 1,
      content: String(this.form.value.tileName),
    };

    this.service.createBoard(board).subscribe();
  }
}
