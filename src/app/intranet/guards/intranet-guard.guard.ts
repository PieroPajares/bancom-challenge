import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

export const intranetGuard: CanActivateChildFn = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  if (!authenticationService.isAuthenticated()) {
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
