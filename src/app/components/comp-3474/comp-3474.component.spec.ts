import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3474Component } from './comp-3474.component';

describe('Comp3474Component', () => {
  let component: Comp3474Component;
  let fixture: ComponentFixture<Comp3474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
