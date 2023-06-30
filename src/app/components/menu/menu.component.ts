import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSegment } from '../../models/menu-segment';

@Component({
  selector: 'ha-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public currentRoute = '';

  public segments: MenuSegment[] = [
    { title: 'Домой', icon: 'tuiIconHome', pseudoActive: false, routerLink: 'welcome' },
    { title: 'Доски', icon: 'tuiIconClipboard', pseudoActive: false, routerLink: 'boards' },
    { title: 'Таблицы', icon: 'tuiIconTable', pseudoActive: false, routerLink: 'tables' },
    { title: 'Графики', icon: 'tuiIconBarChart', pseudoActive: false, routerLink: 'charts' },
    { title: 'Настройки', icon: 'tuiIconSettings', pseudoActive: false, routerLink: 'settings' },
  ];

  constructor(private readonly route: Router) {}

  //
  // private showActiveRoute() {
  //   this.currentRoute = this.route.url.substring(1);
  //
  //   // const index = this.segments.findIndex(segment => segment.routerLink === this.currentRoute);
  //   // this.segments[index].pseudoActive = true;
  //
  //   // this.segments = this.segments.map(segment => ({
  //   //   ...segment,
  //   //   pseudoActive: segment.routerLink === this.currentRoute,
  //   // }));
  //
  //   for (const i in this.segments) {
  //     this.segments[i].pseudoActive = this.segments[i].routerLink === this.currentRoute;
  //   }
  //   console.log(this.segments);
  // }
  //
  // ngDoCheck(): void {
  //   this.showActiveRoute();
  // }
}
