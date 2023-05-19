import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicysecurityComponent } from './policysecurity.component';

describe('PolicysecurityComponent', () => {
  let component: PolicysecurityComponent;
  let fixture: ComponentFixture<PolicysecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicysecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicysecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
