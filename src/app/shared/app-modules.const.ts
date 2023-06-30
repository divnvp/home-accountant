import { HomeModule } from '../pages/home/home.module';
import { NotFoundModule } from '../pages/not-found/not-found.module';
import { HomeLayoutModule } from '../components/home-layout/home-layout.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { MenuModule } from '../components/menu/menu.module';
import { ChartsModule } from '../pages/charts/charts.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { TablesModule } from '../pages/tables/tables.module';
import { WelcomeModule } from '../pages/welcome/welcome.module';
import { BoardsModule } from '../pages/boards/boards.module';
import { DarkThemeModule } from '../components/dark-theme/dark-theme.module';
import { DarkThemeToggleModule } from '../components/dark-theme-toggle/dark-theme-toggle.module';
import { TileModule } from '../components/tile/tile.module';
import { TileCreaterModule } from '../components/tile-creater/tile-creater.module';
import { TileDialogModule } from '../components/tile-dialog/tile-dialog.module';
import { MenuSegmentModule } from '../components/menu-segment/menu-segment.module';

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
  DarkThemeModule,
  DarkThemeToggleModule,
  TileModule,
  TileCreaterModule,
  TileDialogModule,
  MenuSegmentModule,
];
