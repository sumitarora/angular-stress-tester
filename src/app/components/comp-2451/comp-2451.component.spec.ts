import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2451Component } from './comp-2451.component';

describe('Comp2451Component', () => {
  let component: Comp2451Component;
  let fixture: ComponentFixture<Comp2451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
