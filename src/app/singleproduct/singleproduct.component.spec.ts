import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductComponent } from './singleproduct.component';

describe('SingleproductComponent', () => {
  let component: SingleproductComponent;
  let fixture: ComponentFixture<SingleproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleproductComponent]
    });
    fixture = TestBed.createComponent(SingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
