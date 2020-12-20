import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../../milobella/authentication/src/lib/auth-guard.service';
import { LoginComponent } from '../../../milobella/authentication/src/lib/login.component';
import { SentencesListComponent } from './sentences-list/sentences-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: SentencesListComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppDevRoutingModule {
}
