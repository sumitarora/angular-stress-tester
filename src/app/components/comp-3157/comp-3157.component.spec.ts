import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3157Component } from './comp-3157.component';

describe('Comp3157Component', () => {
  let component: Comp3157Component;
  let fixture: ComponentFixture<Comp3157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
