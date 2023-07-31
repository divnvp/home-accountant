import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Board } from '../../models/board';
import { StateService } from '../state.service';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(
    private readonly http: HttpClient,
    private readonly state: StateService,
    private readonly alertService: TuiAlertService,
  ) {}

  loadBoards(): Observable<void> {
    return this.http.get<Board[]>(`${API.url}/boards`).pipe(
      catchError(error => {
        this.alertService
          .open(`Ошибка: ${error.error.error.header}`, {
            status: TuiNotification.Error,
          })
          .subscribe();

        return throwError(() => error);
      }),
      map(response => this.state.setBoards(response)),
    );
  }

  createBoard(board: Board): Observable<void> {
    return this.http.post<void>(`${API.url}/board`, board).pipe(
      catchError(error => {
        this.alertService
          .open(`Ошибка: ${error.error.error.header}`, {
            status: TuiNotification.Error,
          })
          .subscribe();

        return throwError(() => error);
      }),
    );
  }
}
