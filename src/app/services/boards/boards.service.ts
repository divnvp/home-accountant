import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Board } from '../../models/board';
import { StateService } from '../state.service';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  constructor(private readonly http: HttpClient, private readonly state: StateService) {}

  loadBoards(): Observable<void> {
    return this.http.get<Board[]>(`${API.url}/boards`).pipe(map(response => this.state.setBoards(response)));
  }
}
