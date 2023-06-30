import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { TuiBrightness } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducer';

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

  constructor(private service: StateService, private readonly store$: Store<State>) {}

  ngOnInit(): void {
    this.generateLocalStorageKey();
    this.store$.subscribe();
  }

  private generateLocalStorageKey() {
    if (localStorage?.getItem('boards') === null || localStorage?.getItem('boards') === undefined) {
      localStorage.setItem('boards', JSON.stringify([]));
    }
  }
}
