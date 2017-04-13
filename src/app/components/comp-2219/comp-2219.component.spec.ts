import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2219Component } from './comp-2219.component';

describe('Comp2219Component', () => {
  let component: Comp2219Component;
  let fixture: ComponentFixture<Comp2219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
