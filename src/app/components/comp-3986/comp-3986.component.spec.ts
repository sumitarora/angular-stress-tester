import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3986Component } from './comp-3986.component';

describe('Comp3986Component', () => {
  let component: Comp3986Component;
  let fixture: ComponentFixture<Comp3986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
