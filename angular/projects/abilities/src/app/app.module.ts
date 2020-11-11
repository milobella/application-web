import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';
import { TableLineComponent } from './table/table-line/table-line.component';
import { LinkComponent } from './link/link.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ContainerComponent,
    TableComponent,
    TableLineComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
