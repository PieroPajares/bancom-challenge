import { Injectable, inject } from '@angular/core';
import { LoginForm } from '../../domains/interfaces/login-form.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class LoginPresenter {
  authenticationService = inject(AuthenticationService);

  login(form: LoginForm): void {
    this.authenticationService.createSession(form);
  }
}
