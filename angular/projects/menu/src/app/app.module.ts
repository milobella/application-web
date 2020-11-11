import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from 'projects/milobella/authentication/src/lib/authentication.module';
import { EmptyRouteComponent } from 'projects/menu/src/app/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssetUrlPipe,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
