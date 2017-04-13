import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2784Component } from './comp-2784.component';

describe('Comp2784Component', () => {
  let component: Comp2784Component;
  let fixture: ComponentFixture<Comp2784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
