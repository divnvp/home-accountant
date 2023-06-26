import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { TuiBrightness } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private onDark = this.service.darkThemeState$;

  get nameTheme(): TuiBrightness | null {
    let theme: 'onDark' | 'onLight' | null = null;
    this.onDark.subscribe(value => (value ? (theme = 'onDark') : (theme = 'onLight')));

    return theme;
  }

  constructor(private service: StateService) {}

  ngOnInit(): void {
    this.generateLocalStorageKey();
  }

  private generateLocalStorageKey() {
    if (localStorage?.getItem('boards') === null || localStorage?.getItem('boards') === undefined) {
      localStorage.setItem('boards', JSON.stringify([]));
    }
  }
}
