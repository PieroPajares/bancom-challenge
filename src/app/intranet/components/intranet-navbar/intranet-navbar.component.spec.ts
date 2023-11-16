import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetNavbarComponent } from './intranet-navbar.component';

describe('IntranetNavbarComponent', () => {
  let component: IntranetNavbarComponent;
  let fixture: ComponentFixture<IntranetNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetNavbarComponent]
    });
    fixture = TestBed.createComponent(IntranetNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
