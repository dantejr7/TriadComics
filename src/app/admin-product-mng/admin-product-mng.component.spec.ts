import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductMngComponent } from './admin-product-mng.component';

describe('AdminProductMngComponent', () => {
  let component: AdminProductMngComponent;
  let fixture: ComponentFixture<AdminProductMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductMngComponent]
    });
    fixture = TestBed.createComponent(AdminProductMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
