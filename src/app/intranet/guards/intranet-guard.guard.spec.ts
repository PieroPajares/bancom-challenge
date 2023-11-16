import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { intranetGuard } from './intranet-guard.guard';

describe('intranetGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => intranetGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
