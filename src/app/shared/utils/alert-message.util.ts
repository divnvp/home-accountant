import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

export function showAlertMessage(alertService: TuiAlertService, message: string, status: TuiNotification): void {
  alertService
    .open(message, {
      status,
    })
    .subscribe();
}
