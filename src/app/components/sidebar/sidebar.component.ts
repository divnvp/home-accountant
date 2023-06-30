import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ha-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Output() send: EventEmitter<boolean> = new EventEmitter<boolean>();

  public show = true;

  public showMenu(): void {
    this.show = !this.show;

    this.send.emit(this.show);
  }
}
