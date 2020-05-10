import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AssetUrlPipe } from './pipes/asset-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmptyRouteComponent,
    AssetUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
