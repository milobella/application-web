import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule {
}
