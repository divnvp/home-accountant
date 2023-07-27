import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards/boards.service';

@Component({
  selector: 'ha-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardsComponent implements OnInit {
  constructor(private readonly service: BoardsService) {}

  ngOnInit(): void {
    this.getBoards();
  }

  private getBoards(): void {
    this.service.loadBoards().subscribe();
  }
}
