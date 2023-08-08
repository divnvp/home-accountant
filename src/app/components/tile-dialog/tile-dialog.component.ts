import { ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAlertService, TuiDialogContext, TuiDialogService, TuiNotification } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Board } from '../../models/board';
import { BoardsService } from '../../services/boards/boards.service';
import { tap } from 'rxjs';
import { showAlertMessage } from '../../shared/utils/alert-message.util';

@Component({
  selector: 'ha-tile-dialog',
  templateUrl: './tile-dialog.component.html',
  styleUrls: ['./tile-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileDialogComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl<string>(''),
    width: new FormControl<number>(0),
    height: new FormControl<number>(0),
  });

  get tile(): Board {
    return this.context.data;
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<Board, Board>,
    private readonly service: BoardsService,
    private readonly alertService: TuiAlertService,
  ) {}

  ngOnInit(): void {
    this.formSetValue();
  }

  public showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }

  public onSubmit() {
    const newTile = {
      id: this.tile.id,
      content: this.form.value.title ?? '',
      width: this.form.value.width ?? 1,
      height: this.form.value.height ?? 1,
    };

    this.updateBoardApi(newTile);
  }

  public close(): void {
    this.context.$implicit.complete();
  }

  public delete(): void {
    this.service
      .deleteBoard(this.tile.id)
      .pipe(
        tap(() => {
          this.context.completeWith(this.tile);
          showAlertMessage(this.alertService, 'Доска удалена', TuiNotification.Success);
        }),
      )
      .subscribe();
  }

  private formSetValue(): void {
    this.form.setValue({
      title: this.tile.content.toString(),
      width: Number(this.tile.width),
      height: Number(this.tile.height),
    });
  }

  private updateBoardApi(newTile: Board): void {
    this.service
      .updateBoard(newTile)
      .pipe(
        tap(() => {
          this.context.completeWith(newTile);
          showAlertMessage(this.alertService, 'Доска обновлена', TuiNotification.Success);
        }),
      )
      .subscribe();
  }
}
