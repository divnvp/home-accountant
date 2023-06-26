import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'ha-tile-creater',
  templateUrl: './tile-creater.component.html',
  styleUrls: ['./tile-creater.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileCreaterComponent {
  public form = new FormGroup({
    tileName: new FormControl(''),
  });

  public openedDialog = false;

  constructor(private service: StateService) {}

  public createBoard(): void {
    this.openedDialog = !this.openedDialog;
  }

  public onSubmit() {
    this.service.boards$.next(
      this.service.boards$.getValue()?.concat({ width: 3, height: 1, content: String(this.form.value.tileName) }),
    );
    localStorage.setItem('boards', JSON.stringify(this.service.boards$.getValue()));

    this.openedDialog = false;
    this.form.reset();
  }
}
