import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3578Component } from './comp-3578.component';

describe('Comp3578Component', () => {
  let component: Comp3578Component;
  let fixture: ComponentFixture<Comp3578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
