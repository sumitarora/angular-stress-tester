import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2726Component } from './comp-2726.component';

describe('Comp2726Component', () => {
  let component: Comp2726Component;
  let fixture: ComponentFixture<Comp2726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
