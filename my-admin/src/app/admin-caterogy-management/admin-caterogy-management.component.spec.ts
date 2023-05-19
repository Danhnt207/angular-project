import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCaterogyManagementComponent } from './admin-caterogy-management.component';

describe('AdminCaterogyManagementComponent', () => {
  let component: AdminCaterogyManagementComponent;
  let fixture: ComponentFixture<AdminCaterogyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCaterogyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCaterogyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
