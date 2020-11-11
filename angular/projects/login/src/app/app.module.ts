import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from 'projects/milobella/authentication/src/lib/authentication.module';
import { EmptyRouteComponent } from 'projects/login/src/app/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
