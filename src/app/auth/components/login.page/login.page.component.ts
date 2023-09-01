import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from "../../../services/state.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Credentials } from "../../../models/credentials";
import { TuiDestroyService } from "@taiga-ui/cdk";
import { takeUntil } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'ha-login.page',
  templateUrl: './login.page.component.html',
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public readonly isLoading$ = this.state.loading.value$;
  public readonly form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly state: StateService,
    private readonly service: AuthService,
    private readonly router: Router,
    private readonly destroy$: TuiDestroyService,
  ) {
  }

  public onSubmit(): void {
    this.service.login(this.form.value as Credentials)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.goHome();
      });
  }

  private goHome(): void {
    void this.router.navigate(['/']);
  }
}
