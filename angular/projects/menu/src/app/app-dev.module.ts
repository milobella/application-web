import { AppDevComponent } from './app-dev.component';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppDevRoutingModule } from './app-dev-routing.module';
import { AuthenticationModule } from 'projects/milobella/authentication/src/lib/authentication.module';

@NgModule({
  declarations: [
    AppDevComponent,
    HeaderComponent,
    AssetUrlPipe
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppDevRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppDevComponent]
})
export class AppDevModule {
}
