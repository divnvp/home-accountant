import { Injectable } from '@angular/core';
import { Board } from '../boards/models/board';
import { BehaviorSubjectItem } from '../state/behavior-subject-item';
import { GlobalSettings } from '../settings/models/settings';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly loading: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem<boolean>(false);
  readonly darkTheme: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem<boolean>(this.globalSettings.isDarkTheme);
  readonly boards: BehaviorSubjectItem<Board[]> = new BehaviorSubjectItem<Board[]>([]);

  constructor(private globalSettings: GlobalSettings) {}

  startLoading(): void {
    this.loading.value = true;
  }

  stopLoading(): void {
    this.loading.value = false;
  }

  setDarkTheme(value: boolean): void {
    this.darkTheme.value = value;
    this.globalSettings.setDarkTheme(value);
  }

  setBoards(value: Board[]): void {
    this.boards.value = value;
  }
}
