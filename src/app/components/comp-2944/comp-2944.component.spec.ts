import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2944Component } from './comp-2944.component';

describe('Comp2944Component', () => {
  let component: Comp2944Component;
  let fixture: ComponentFixture<Comp2944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
