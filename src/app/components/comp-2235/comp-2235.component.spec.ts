import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2235Component } from './comp-2235.component';

describe('Comp2235Component', () => {
  let component: Comp2235Component;
  let fixture: ComponentFixture<Comp2235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
