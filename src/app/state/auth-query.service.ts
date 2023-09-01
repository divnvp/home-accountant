import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { StateService } from "../services/state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthQueryService {
  constructor(
    private readonly state: StateService
  ) {
  }

  isAvailable(): Observable<boolean> {
    return of(this.state.isAuth.value);
  }
}
