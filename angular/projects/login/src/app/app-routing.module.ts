import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from 'projects/menu/src/app/empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuardService } from 'projects/milobella/authentication/src/lib/auth-guard.service';
import { LoginComponent } from 'projects/milobella/authentication/src/lib/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: EmptyRouteComponent , canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
})
export class AppRoutingModule {
}
