import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MenuSegment } from '../../models/menu-segment';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'ha-menu-segment',
  templateUrl: './menu-segment.component.html',
  styleUrls: ['./menu-segment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSegmentComponent implements OnInit {
  @Input() public segment: MenuSegment | undefined;

  public pseudoActive = false;
  private currentRoute = '';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(result => {
      // console.log(result.url);
    });
    // this.currentRoute = this.route.url.substring(1);

    // this.pseudoActive = this.segment?.routerLink === this.currentRoute;
  }
}
