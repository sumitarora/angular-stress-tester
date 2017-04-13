import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2650Component } from './comp-2650.component';

describe('Comp2650Component', () => {
  let component: Comp2650Component;
  let fixture: ComponentFixture<Comp2650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
