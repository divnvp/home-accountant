import { Injectable } from '@angular/core';
import { Board } from '../boards/models/board';
import { BehaviorSubjectItem } from '../state/behavior-subject-item';
import { Settings } from '../settings/models/settings';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly isAuth: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem<boolean>(false);
  readonly user: BehaviorSubjectItem<User> = new BehaviorSubjectItem<User>(new User({}));
  readonly loading: BehaviorSubjectItem<boolean> = new BehaviorSubjectItem<boolean>(false);
  readonly settings: BehaviorSubjectItem<Settings> = new BehaviorSubjectItem<Settings>(new Settings({}));
  readonly boards: BehaviorSubjectItem<Board[]> = new BehaviorSubjectItem<Board[]>([]);

  startLoading(): void {
    this.loading.value = true;
  }

  stopLoading(): void {
    this.loading.value = false;
  }

  setIsAuth(value: boolean): void {
    this.isAuth.value = value;
  }

  setSettings(value: Settings): void {
    this.settings.value = value;
  }

  setBoards(value: Board[]): void {
    this.boards.value = value;
  }
}
