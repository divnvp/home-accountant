import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'ha-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  public boards = this.service.boards$.getValue();
  public order = new Map();

  constructor(private service: StateService) {}

  public createBoard(): void {}
}
