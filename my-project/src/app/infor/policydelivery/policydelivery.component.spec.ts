import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicydeliveryComponent } from './policydelivery.component';

describe('PolicydeliveryComponent', () => {
  let component: PolicydeliveryComponent;
  let fixture: ComponentFixture<PolicydeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicydeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicydeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
