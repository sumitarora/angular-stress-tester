import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2255Component } from './comp-2255.component';

describe('Comp2255Component', () => {
  let component: Comp2255Component;
  let fixture: ComponentFixture<Comp2255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
