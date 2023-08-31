import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthQueryService } from "../../state/auth-query.service";
import { tap } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const service = inject(AuthQueryService);

  return service.isAvailable().pipe(
    tap(value => {
      if (!value) {
        void router.navigate(['/auth/login']);
      }
    })
  );
};
