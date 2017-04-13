import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2167Component } from './comp-2167.component';

describe('Comp2167Component', () => {
  let component: Comp2167Component;
  let fixture: ComponentFixture<Comp2167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
