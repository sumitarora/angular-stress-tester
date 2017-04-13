import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2670Component } from './comp-2670.component';

describe('Comp2670Component', () => {
  let component: Comp2670Component;
  let fixture: ComponentFixture<Comp2670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
