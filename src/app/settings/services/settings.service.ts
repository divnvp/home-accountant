import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StateService } from "../../services/state.service";
import { TuiAlertService } from "@taiga-ui/core";
import { catchError, finalize, map, Observable } from "rxjs";
import { Settings } from "../models/settings";
import { API } from "../../services/api";
import { catchErrorUtil } from "../../shared/utils/catch-error.util";

@Injectable()
export class SettingsService {
  constructor(
    private http: HttpClient,
    private readonly state: StateService,
    private readonly alertService: TuiAlertService,
  ) {
  }

  getSettings(): Observable<void> {
    this.state.startLoading();

    return this.http.get<Settings>(`${API.url}/settings`).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      map((response: Settings) => this.state.setSettings(response)),
      finalize(() => this.state.stopLoading()),
    )
  }

  patchSettings(value: Settings): Observable<void> {
    this.state.startLoading();

    return this.http.patch(`${API.url}/settings`, value).pipe(
      catchError(error => catchErrorUtil(error, this.alertService)),
      map(() => this.state.setSettings(value)),
      finalize(() => this.state.stopLoading()),
    );
  }
}
