import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOTPComponent } from './signup-otp.component';

describe('SignupOTPComponent', () => {
  let component: SignupOTPComponent;
  let fixture: ComponentFixture<SignupOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupOTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
