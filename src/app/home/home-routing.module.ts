import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { BoardsComponent } from '../boards/boards.component';
import { TablesComponent } from '../tables/tables.component';
import { ChartsComponent } from '../charts/charts.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'boards',
        component: BoardsComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
