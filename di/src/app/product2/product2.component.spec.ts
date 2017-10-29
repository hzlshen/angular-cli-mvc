/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Product2Component } from './product2.component';

describe('Product2Component', () => {
  let component: Product2Component;
  let fixture: ComponentFixture<Product2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
