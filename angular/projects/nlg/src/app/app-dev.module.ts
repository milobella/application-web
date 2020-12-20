import { AppDevComponent } from './app-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDevRoutingModule } from './app-dev-routing.module';
import { AuthenticationModule } from '../../../milobella/authentication/src/lib/authentication.module';
import { SentencesListComponent } from './sentences-list/sentences-list.component';

@NgModule({
  declarations: [
    AppDevComponent,
    SentencesListComponent
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
  exports: [
    SentencesListComponent
  ],
  bootstrap: [AppDevComponent]
})
export class AppDevModule {
}
