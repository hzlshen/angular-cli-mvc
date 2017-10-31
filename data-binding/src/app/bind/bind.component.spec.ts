import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindComponent } from './bind.component';

describe('BindComponent', () => {
  let component: BindComponent;
  let fixture: ComponentFixture<BindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
