import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2936Component } from './comp-2936.component';

describe('Comp2936Component', () => {
  let component: Comp2936Component;
  let fixture: ComponentFixture<Comp2936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
