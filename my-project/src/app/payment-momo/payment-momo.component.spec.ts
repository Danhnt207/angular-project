import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMomoComponent } from './payment-momo.component';

describe('PaymentMomoComponent', () => {
  let component: PaymentMomoComponent;
  let fixture: ComponentFixture<PaymentMomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMomoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
