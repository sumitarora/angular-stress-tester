import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2176Component } from './comp-2176.component';

describe('Comp2176Component', () => {
  let component: Comp2176Component;
  let fixture: ComponentFixture<Comp2176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
