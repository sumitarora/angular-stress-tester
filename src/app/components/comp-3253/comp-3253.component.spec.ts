import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3253Component } from './comp-3253.component';

describe('Comp3253Component', () => {
  let component: Comp3253Component;
  let fixture: ComponentFixture<Comp3253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
