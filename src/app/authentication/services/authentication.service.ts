import { Injectable, inject } from '@angular/core';
import { LoginForm } from '../domains/interfaces/login-form.interface';
import { Router } from '@angular/router';
import { AuthStorage } from '../domains/enums/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  router = inject(Router);
  expirationTime = 15;

  createSession(form: LoginForm): void  {
    if (form.email && form.password) this.generateSession();
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem(AuthStorage.Session)) {
      const currentDate: Date = new Date();
      const session: Date = new Date(sessionStorage.getItem(AuthStorage.Session) || '')
      return session > currentDate;
    }

    return false;
  }

  logout(): void {
    sessionStorage.setItem(AuthStorage.Session, '');
    this.redirectToHome();
  }

  private generateSession(): void {
    const currentDate: Date = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + this.expirationTime);
    sessionStorage.setItem(AuthStorage.Session, currentDate.toISOString());
    this.redirectToIntranet();
  }

  private redirectToIntranet() {
    this.router.navigate(['/intranet']);
  }

  private redirectToHome() {
    this.router.navigate(['/']);
  }
}
