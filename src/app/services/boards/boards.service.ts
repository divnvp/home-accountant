import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Board } from '../../models/board';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private readonly http: HttpClient, private readonly state: StateService) {}

  loadBoards(): Observable<void> {
    return this.http
      .get<Board[]>('https://2ad07b83-0437-496d-bab9-ee290008d154.mock.pstmn.io/boards')
      .pipe(map(response => this.state.setBoards(response)));
  }
}
