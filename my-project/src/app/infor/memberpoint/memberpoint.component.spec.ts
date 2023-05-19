import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberpointComponent } from './memberpoint.component';

describe('MemberpointComponent', () => {
  let component: MemberpointComponent;
  let fixture: ComponentFixture<MemberpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberpointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
