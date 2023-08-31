import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthLayoutComponent } from "./components/auth.layout/auth.layout.component";
import { LoginPageComponent } from "./components/login.page/login.page.component";

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
