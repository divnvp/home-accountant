import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { v4 } from 'uuid';
import { StateService } from '../../../services/state.service';
import { Board } from '../../models/board';
import { BoardsService } from '../../services/boards.service';
import { tap } from 'rxjs';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { showAlertMessage } from '../../../shared/utils/alert-message.util';

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

  constructor(
    private readonly state: StateService,
    private readonly service: BoardsService,
    private readonly alertService: TuiAlertService,
  ) {}

  public showDialog(): void {
    this.openedDialog = !this.openedDialog;
  }

  public onSubmit() {
    this.createBoardApi();

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

    this.service
      .createBoard(board)
      .pipe(
        tap(() => {
          this.state.setBoards(this.state.boards.value.concat(board));

          showAlertMessage(this.alertService, 'Доска создана', TuiNotification.Success);
        }),
      )
      .subscribe();
  }
}
