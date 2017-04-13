import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2796Component } from './comp-2796.component';

describe('Comp2796Component', () => {
  let component: Comp2796Component;
  let fixture: ComponentFixture<Comp2796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
