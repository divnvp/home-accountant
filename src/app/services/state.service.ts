import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public darkThemeState$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('dark-theme')!));
  public boards$ = new BehaviorSubject<Board[]>(
    localStorage?.getItem('boards') ? JSON.parse(localStorage.getItem('boards')!) : [],
  );
}
