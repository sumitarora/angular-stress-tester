import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2050Component } from './comp-2050.component';

describe('Comp2050Component', () => {
  let component: Comp2050Component;
  let fixture: ComponentFixture<Comp2050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
