import { TestBed } from '@angular/core/testing';

import { UsersPresenter } from './users.presenter';

describe('UsersService', () => {
  let service: UsersPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPresenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
