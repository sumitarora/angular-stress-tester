import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2770Component } from './comp-2770.component';

describe('Comp2770Component', () => {
  let component: Comp2770Component;
  let fixture: ComponentFixture<Comp2770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
