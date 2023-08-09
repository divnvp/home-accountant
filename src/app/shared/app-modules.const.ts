import { HomeModule } from '../home/home.module';
import { NotFoundModule } from '../not-found/not-found.module';
import { HomeLayoutModule } from '../home/components/home-layout/home-layout.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenuModule } from '../sidebar/components/menu/menu.module';
import { ChartsModule } from '../charts/charts.module';
import { SettingsModule } from '../settings/settings.module';
import { TablesModule } from '../tables/tables.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { BoardsModule } from '../boards/boards.module';

export const MODULES = [
  HomeModule,
  NotFoundModule,
  HomeLayoutModule,
  SidebarModule,
  MenuModule,
  ChartsModule,
  SettingsModule,
  TablesModule,
  WelcomeModule,
  BoardsModule,
];
