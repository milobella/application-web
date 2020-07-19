import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { PixiComponent } from './pixi/pixi.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './table/table.component';
import { TableLineComponent } from './table-line/table-line.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    AbilitiesListComponent,
    PixiComponent,
    ContainerComponent,
    TableComponent,
    TableLineComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
