import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2003Component } from './comp-2003.component';

describe('Comp2003Component', () => {
  let component: Comp2003Component;
  let fixture: ComponentFixture<Comp2003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
