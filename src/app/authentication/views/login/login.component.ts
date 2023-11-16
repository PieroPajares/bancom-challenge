import { Component, inject } from '@angular/core';
import { LoginForm } from '../../domains/interfaces/login-form.interface';
import { LoginPresenter } from './login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginPresenter]
})
export class LoginComponent {
  loginPresenter = inject(LoginPresenter);

  login(form: LoginForm): void {
    this.loginPresenter.login(form);
  }
}
