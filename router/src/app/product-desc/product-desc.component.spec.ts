import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescComponent } from './product-desc.component';

describe('ProductDescComponent', () => {
  let component: ProductDescComponent;
  let fixture: ComponentFixture<ProductDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
