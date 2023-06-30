import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MODULES } from './shared/app-modules.const';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(storeReducer),
    ...MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
