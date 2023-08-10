import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { TuiBrightness } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private settings$ = this.state.settings.value$;

  get nameTheme(): TuiBrightness | null {
    let theme: 'onDark' | 'onLight' | null = null;
    this.settings$.subscribe(value => {
      return (value.darkTheme ? (theme = 'onDark') : (theme = 'onLight'))
    });

    return theme;
  }

  constructor(private state: StateService) {}
}
