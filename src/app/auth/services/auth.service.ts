import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StateService } from "../../services/state.service";
import { TuiAlertService } from "@taiga-ui/core";
import { catchError, finalize, map, Observable } from "rxjs";
import { Credentials } from "../../models/credentials";
import { API } from "../../services/api";
import { catchErrorUtil } from "../../shared/utils/catch-error.util";

@Injectable()
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly state: StateService,
    private readonly alertService: TuiAlertService,
  ) {
  }

  login(credentials: Credentials): Observable<void> {
    this.state.startLoading();

    return this.http.post<void>(`${API.url}/login`, credentials).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      map(() => this.state.setIsAuth(true)),
      finalize(() => this.state.stopLoading()),
    );
  }
}
