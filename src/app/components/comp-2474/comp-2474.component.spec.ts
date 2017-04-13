import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2474Component } from './comp-2474.component';

describe('Comp2474Component', () => {
  let component: Comp2474Component;
  let fixture: ComponentFixture<Comp2474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
