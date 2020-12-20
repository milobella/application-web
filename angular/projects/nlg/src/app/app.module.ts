import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentencesListComponent } from 'projects/nlg/src/app/sentences-list/sentences-list.component';
import { CommonModule } from '@angular/common';
import { AssetUrlPipe } from 'projects/menu/src/app/pipes/asset-url.pipe';
import { EmptyRouteComponent } from 'projects/menu/src/app/empty-route/empty-route.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SentencesListComponent,
    AssetUrlPipe,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
