import { AlertComponent } from './core/components/alert/alert.component';
import { AppRoutes } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   CoreModule,
    PublicModule,
    AdminModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
