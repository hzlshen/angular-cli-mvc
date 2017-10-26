import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1Component } from './product1.component';

describe('Product1Component', () => {
  let component: Product1Component;
  let fixture: ComponentFixture<Product1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
