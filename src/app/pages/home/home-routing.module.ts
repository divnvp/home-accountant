import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../../components/home-layout/home-layout.component';

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
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule),
      },
      {
        path: 'boards',
        loadChildren: () => import('../boards/boards.module').then(m => m.BoardsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('../tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('../charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
