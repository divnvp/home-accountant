import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StateService } from '../../services/state.service';
import { Board } from '../../models/board';
import { TileDialogComponent } from '../tile-dialog/tile-dialog.component';

@Component({
  selector: 'ha-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  public boards$ = this.service.boards.value$;
  public isLoading$ = this.service.loading.value$;
  public order = new Map();

  constructor(
    private service: StateService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}

  public openDialog(board: Board) {
    this.dialogs
      .open<Board>(new PolymorpheusComponent(TileDialogComponent, this.injector), {
        data: board,
      })
      .subscribe({
        next: (value: Board) => {
          this.service.setBoards(
            this.service.boards.value?.map((currentValue: Board) =>
              currentValue.id === value.id ? value : currentValue,
            ),
          );
        },
      });
  }
}
