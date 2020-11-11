import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'projects/milobella/authentication/src/lib/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthenticationService) {
  }

  logout(): void {
    this.auth.logout('login').then();
  }
}
