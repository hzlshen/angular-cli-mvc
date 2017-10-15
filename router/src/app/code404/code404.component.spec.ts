import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Code404Component } from './code404.component';

describe('Code404Component', () => {
  let component: Code404Component;
  let fixture: ComponentFixture<Code404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
