import { Component, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-intranet-navbar',
  templateUrl: './intranet-navbar.component.html',
  styleUrls: ['./intranet-navbar.component.scss']
})
export class IntranetNavbarComponent {
  authenticationService = inject(AuthenticationService);

  logout(): void {
    this.authenticationService.logout();
  }
}
