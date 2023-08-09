import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TuiAlertService } from '@taiga-ui/core';
import { catchError, finalize, map, Observable } from 'rxjs';
import { Board } from '../models/board';
import { StateService } from '../../services/state.service';
import { API } from '../../services/api';
import { catchErrorUtil } from '../../shared/utils/catch-error.util';

@Injectable()
export class BoardsService {
  constructor(
    private readonly http: HttpClient,
    private readonly state: StateService,
    private readonly alertService: TuiAlertService,
  ) {}

  loadBoards(): Observable<void> {
    this.state.startLoading();

    return this.http.get<Board[]>(`${API.url}/boards`).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      map(response => this.state.setBoards(response)),
      finalize(() => this.state.stopLoading()),
    );
  }

  createBoard(board: Board): Observable<void> {
    this.state.startLoading();

    return this.http.post<void>(`${API.url}/board`, board).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      finalize(() => this.state.stopLoading()),
    );
  }

  updateBoard(board: Board): Observable<void> {
    this.state.startLoading();

    return this.http.patch<void>(`${API.url}/board/${board.id}`, board).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      finalize(() => this.state.stopLoading()),
    );
  }

  deleteBoard(id: string): Observable<void> {
    this.state.startLoading();

    return this.http.delete<void>(`${API.url}/board/${id}`).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      map(() => {
        const needDeleteId = this.state.boards.value.findIndex(b => b.id === id);
        this.state.boards.value.splice(needDeleteId, 1);
        this.state.setBoards(this.state.boards.value);
      }),
      finalize(() => this.state.stopLoading()),
    );
  }
}
