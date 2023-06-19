import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ha-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public show = false;

  showMenu(): void {
    this.show = !this.show;
  }
}
