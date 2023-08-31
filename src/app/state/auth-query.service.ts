import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthQueryService {
  isAvailable() {
    return of(false);
  }
}
