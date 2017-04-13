import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2941Component } from './comp-2941.component';

describe('Comp2941Component', () => {
  let component: Comp2941Component;
  let fixture: ComponentFixture<Comp2941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
