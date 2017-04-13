import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2387Component } from './comp-2387.component';

describe('Comp2387Component', () => {
  let component: Comp2387Component;
  let fixture: ComponentFixture<Comp2387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
