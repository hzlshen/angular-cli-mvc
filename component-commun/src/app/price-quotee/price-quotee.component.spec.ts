import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuoteeComponent } from './price-quotee.component';

describe('PriceQuoteeComponent', () => {
  let component: PriceQuoteeComponent;
  let fixture: ComponentFixture<PriceQuoteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQuoteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQuoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
