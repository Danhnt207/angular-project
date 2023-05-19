import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBankAccountComponent } from './type-bank-account.component';

describe('TypeBankAccountComponent', () => {
  let component: TypeBankAccountComponent;
  let fixture: ComponentFixture<TypeBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBankAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
