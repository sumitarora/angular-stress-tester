import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2393Component } from './comp-2393.component';

describe('Comp2393Component', () => {
  let component: Comp2393Component;
  let fixture: ComponentFixture<Comp2393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
