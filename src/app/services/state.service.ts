import { Injectable } from '@angular/core';
import { Board } from '../boards/models/board';
import { BehaviorSubjectItem } from '../state/behavior-subject-item';
import { Settings } from '../settings/models/settings';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly loading: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem<boolean>(false);
  readonly settings: BehaviorSubjectItem<Settings> = new BehaviorSubjectItem<Settings>(new Settings({}));
  readonly boards: BehaviorSubjectItem<Board[]> = new BehaviorSubjectItem<Board[]>([]);

  startLoading(): void {
    this.loading.value = true;
  }

  stopLoading(): void {
    this.loading.value = false;
  }

  setSettings(value: Settings): void {
    this.settings.value = value;
  }

  setBoards(value: Board[]): void {
    this.boards.value = value;
  }
}
