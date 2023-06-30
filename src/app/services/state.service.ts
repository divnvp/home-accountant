import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../models/board';
import { State } from '../store/reducer';
import { Store } from '@ngrx/store';
import { addBoards } from '../store/boards/boards.actions';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public darkThemeState$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('dark-theme')!));
  public boards$ = new BehaviorSubject<Board[] | null>(null);

  constructor(private readonly store$: Store<State>) {}

  loadBoards() {
    this.store$.dispatch(addBoards([]));
  }
}
