import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { Observable, throwError } from 'rxjs';

export function catchErrorUtil(error: any, alertService: TuiAlertService): Observable<never> {
  alertService
    .open(`Ошибка: ${error.error.error.header}`, {
      status: TuiNotification.Error,
    })
    .subscribe();

  return throwError(() => error);
}
