import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserMngComponent } from './admin-user-mng.component';

describe('AdminUserMngComponent', () => {
  let component: AdminUserMngComponent;
  let fixture: ComponentFixture<AdminUserMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserMngComponent]
    });
    fixture = TestBed.createComponent(AdminUserMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
