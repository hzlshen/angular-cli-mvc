import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistComponent } from './reactive-regist.component';

describe('ReactiveRegistComponent', () => {
  let component: ReactiveRegistComponent;
  let fixture: ComponentFixture<ReactiveRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
