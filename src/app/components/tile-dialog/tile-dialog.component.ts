import { ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Board } from '../../models/board';

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

  get data(): Board {
    return this.context.data;
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<Board, Board>,
  ) {}

  ngOnInit(): void {
    this.formSetValue();
  }

  public showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }

  public onSubmit() {
    this.context.completeWith({
      id: this.data.id,
      content: this.form.value.title ?? '',
      width: this.form.value.width ?? 1,
      height: this.form.value.height ?? 1,
    });
  }

  public close(): void {
    this.context.$implicit.complete();
  }

  private formSetValue(): void {
    this.form.setValue({
      title: this.data.content,
      width: this.data.width,
      height: this.data.height,
    });
  }
}
