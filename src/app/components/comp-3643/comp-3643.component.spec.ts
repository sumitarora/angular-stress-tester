import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3643Component } from './comp-3643.component';

describe('Comp3643Component', () => {
  let component: Comp3643Component;
  let fixture: ComponentFixture<Comp3643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
