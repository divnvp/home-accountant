import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { BehaviorSubjectItem } from '../state-management/behavior-subject-item';
import { GlobalSettings } from '../models/settings';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly darkTheme: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem(this.globalSettings.isDarkTheme);
  readonly boards: BehaviorSubjectItem<Board[]> = new BehaviorSubjectItem<Board[]>([]);

  constructor(private globalSettings: GlobalSettings) {}

  setDarkTheme(value: boolean): void {
    this.darkTheme.value = value;
    this.globalSettings.setDarkTheme(value);
  }

  setBoards(value: Board[]): void {
    this.boards.value = value;
  }
}
