import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2888Component } from './comp-2888.component';

describe('Comp2888Component', () => {
  let component: Comp2888Component;
  let fixture: ComponentFixture<Comp2888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
