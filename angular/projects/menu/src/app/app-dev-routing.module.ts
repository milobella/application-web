import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'projects/milobella/authentication/src/lib/auth-guard.service';
import { LoginComponent } from 'projects/milobella/authentication/src/lib/login.component';
import { HeaderComponent } from 'projects/menu/src/app/header/header.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HeaderComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppDevRoutingModule {
}
