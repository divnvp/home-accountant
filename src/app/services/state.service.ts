import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public darkThemeState$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('dark-theme')!));
}
