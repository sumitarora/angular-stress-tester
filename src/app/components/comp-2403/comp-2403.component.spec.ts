import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2403Component } from './comp-2403.component';

describe('Comp2403Component', () => {
  let component: Comp2403Component;
  let fixture: ComponentFixture<Comp2403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
