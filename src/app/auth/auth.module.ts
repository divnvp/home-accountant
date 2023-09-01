import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthLayoutComponent } from './components/auth.layout/auth.layout.component';
import { LoginPageComponent } from './components/login.page/login.page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
